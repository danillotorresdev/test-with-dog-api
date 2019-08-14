import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from './Select'
import { NotificationContainer, NotificationManager } from 'react-notifications';

import ActionCreators from '../redux/actionCreators';

class FormFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breedSelected: '',
      defaultBreedDisabled: null,
      defaultColorDisabled: null,
      defaultFontDisabled: null,
      colors: [
        {
          color: 'formDog--color__blue',
          label: 'Azul'
        },
        {
          color: 'formDog--color__red',
          label: 'Vermelho'
        },
        {
          color: 'formDog--color__white',
          label: 'Branco'
        },
        {
          color: 'formDog--color__yellow',
          label: 'Amarelo'
        },
        {
          color: 'formDog--color__purple',
          label: 'Roxo'
        },
      ],
      fonts: [
        {
          font: 'nunito',
          label: 'Nunito Sans',
        },
        {
          font: 'lexend',
          label: 'Lexend Tera',
        },
        {
          font: 'hind',
          label: 'Hind',
        },
        {
          font: 'roboto',
          label: 'Roboto Condensed',
        },
        {
          font: 'montserrat',
          label: 'Montserrat',
        },
      ],
      fontSelected: '',
      nameSelected: '',
      colorSelected: '',
      breedImg: '',
      dateAndHour: '',
      notification: false,
    };

    this.handleSelectBreed = this.handleSelectBreed.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSelectColor = this.handleSelectColor.bind(this);
    this.handleSelectFont = this.handleSelectFont.bind(this);
    this.saveDogInfo = this.saveDogInfo.bind(this);
  }

  componentDidMount() {
    const { loadBreeds } = this.props;
    loadBreeds();

    const font = localStorage.getItem('fontSelected');
    const color = localStorage.getItem('colorSelected');
    const nameSelected = localStorage.getItem('nameSelected');
    const breedImg = localStorage.getItem('breedImg');
    const breedSelected = localStorage.getItem('breedSelected');
    const dateAndHour = localStorage.getItem('dateAndHour');

    if (font) {
      this.setState({ fontSelected: font });
    }
    if (color) {
      this.setState({ colorSelected: color });
    }

    if (nameSelected) {
      this.setState({ nameSelected });
    }
    if (breedImg) {
      this.setState({ breedImg });
    }
    if (breedSelected) {
      this.setState({
        breedSelected
      })
    }

    if (dateAndHour) {
      this.setState({
        dateAndHour
      })
    }
  }

  componentDidUpdate(prevProps) {
    const { breeds, loadImageBreed } = this.props;
    if (breeds.breedSelected !== prevProps.breeds.breedSelected) {
      loadImageBreed();
    }
  }

  handleSelectBreed(event) {
    this.setState({
      defaultBreedDisabled: true
    });
    const { saveBreedSelected } = this.props;
    this.setState({
      breedSelected: event.target.value
    },
      () => saveBreedSelected({
        breedSelected: this.state.breedSelected,
      }));
  }

  json2array = (json) => {
    let result = [];
    if (json) {
      const keys = Object.keys(json);
      keys.forEach((key) => {
        result.push(key);
      });
      return result;
    }
  }

  handleName(e) {
    this.setState({
      nameSelected: e.target.value
    })
  }

  handleSelectColor(e) {
    this.setState({
      defaultColorDisabled: true
    });
    this.setState({
      colorSelected: e.target.value
    });
  }

  handleSelectFont(e) {
    this.setState({
      defaultFontDisabled: true
    });
    this.setState({
      fontSelected: e.target.value
    });
  }

  saveDogInfo() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    const dateAndHourConc = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;

    const { colorSelected, fontSelected, nameSelected, breedSelected } = this.state;
    if(colorSelected !== "" && fontSelected !== "" && nameSelected !== "" && breedSelected !== ""){
    const { imageBreed } = this.props;
    localStorage.setItem('fontSelected', fontSelected);
    localStorage.setItem('colorSelected', colorSelected);
    localStorage.setItem('nameSelected', nameSelected);
    localStorage.setItem('breedSelected', breedSelected);
    localStorage.setItem('breedImg', imageBreed.imageBreed.message);
    localStorage.setItem('dateAndHour', dateAndHourConc);
    NotificationManager.success('Salvo com sucesso');
    } else{
      NotificationManager.error('Você precisa preencher todos os campos para salvar');
    }

    this.setState({
      dateAndHour: dateAndHourConc,
    });
    
  }

  render() {
    const { breeds, imageBreed } = this.props;
    const {
      colors,
      breedSelected,
      fonts,
      nameSelected,
      defaultColorDisabled,
      defaultBreedDisabled,
      defaultFontDisabled,
      breedImg,
    } = this.state

    const breedsData = breeds.data.message;
    const newBreeds = this.json2array(breedsData);

    let dogImage;
    if (breedImg) {
      dogImage = breedImg;
    } else {
      dogImage = imageBreed.imageBreed.message
    }
    if (imageBreed.imageBreed.message !== undefined) {
      dogImage = imageBreed.imageBreed.message;
    }

    return (
      <div className="container pt-4">
        <div className="row">
          <form className="formDog col-md-12 row">
            <div className="col-md-6">
              <div className="formDog--imageWithText form-group d-flex flex-wrap flex-column ">
                <img className="formDog--img" src={dogImage} alt="" />
                <span className={`formDog--dogName ${this.state.colorSelected} formDog--font__${this.state.fontSelected}`}>{nameSelected}</span>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row form-group">
                <div className="col-md-6">
                  <Select
                    value={breedSelected ? breedSelected : 'Selecione uma raça'}
                    handleSelect={this.handleSelectBreed}
                    defaultSelectIsAble={defaultBreedDisabled ? true : null}
                    defaultSelectName="Selecione uma raça"
                  >
                    {newBreeds && newBreeds.map(
                      data => (<option key={data} value={data}>{data}</option>),
                    )}
                  </Select>
                </div>
                <div className="col-md-6 mt-3 mt-sm-0">
                  <Select
                    value={this.state.colorSelected}
                    handleSelect={this.handleSelectColor}
                    defaultSelectIsAble={defaultColorDisabled ? true : null}
                    defaultSelectName="Selecione uma cor"
                  >
                    {colors.map(
                      (color) => (<option key={color.color} value={color.color}>{color.label}</option>),
                    )}
                  </Select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input value={this.state.nameSelected} className="form-control" onChange={this.handleName} id="" placeholder='Digite um nome' />
                </div>
                <div className="col-md-6 mt-3 mt-sm-0">
                  <Select
                    value={this.state.fontSelected}
                    handleSelect={this.handleSelectFont}
                    defaultSelectIsAble={defaultFontDisabled ? true : null}
                    defaultSelectName="Selecione uma fonte"
                  >
                    {fonts.map(
                      (font) => (<option key={font.font} value={font.font}>{font.label}</option>),
                    )}
                  </Select>

                  <div className="formDog--seeOffers">
                    <button onClick={() => this.saveDogInfo()} type="button" className="formDog--sendButton">Salvar</button>
                  </div>

                </div>
              </div>
            </div>

          </form>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    imageBreed: state.imageBreed,
    models: state.models,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadBreeds: () => dispatch(ActionCreators.getBreedsRequest()),
    loadImageBreed: () => dispatch(ActionCreators.getImageBreedRequest()),
    saveBreedSelected: breedSelected => dispatch(ActionCreators.saveBreedSelectedSuccess(breedSelected)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);
