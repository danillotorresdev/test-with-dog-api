import React, { Component } from 'react';
import { IoIosPin, IoIosArrowForward } from 'react-icons/io';
import { connect } from 'react-redux';

import ActionCreators from '../redux/actionCreators';
import imageBreed from '../redux/reducers/imageBreed';

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
          color: 'formFilter--blue',
          label: 'Azul'
        },
        {
          color: 'formFilter--red',
          label: 'Vermelho'
        },
        {
          color: 'formFilter--white',
          label: 'Branco'
        },
        {
          color: 'formFilter--yellow',
          label: 'Amarelo'
        },
        {
          color: 'formFilter--purple',
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
    };

    this.handleSelectBreed = this.handleSelectBreed.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSelectColor = this.handleSelectColor.bind(this);
    this.handleSelectFont = this.handleSelectFont.bind(this);
  }

  componentDidMount() {
    const { loadBreeds, loadModels, loadImageBreed } = this.props;
    loadBreeds();
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


  render() {
    const { breeds, imageBreed } = this.props;
    const { colors, fonts, nameSelected, defaultColorDisabled, defaultBreedDisabled, defaultFontDisabled } = this.state

    const breedsData = breeds.data.message;
    const newBreeds = this.json2array(breedsData);

    return (
      <div className="container pt-4">
        <div className="row">
          <form className="formFilter col-md-12 row">
            <div className="col-md-12">

            </div>
            <div className="col-md-6">
              <div className="formFilter--imageWithText form-group d-flex flex-wrap flex-column ">
                <img class="img-fluid" src={imageBreed.imageBreed.message} alt="" />
                <span className={`formFilter--dogName ${this.state.colorSelected} formFilter--font__${this.state.fontSelected}`}>{nameSelected}</span>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row form-group">
                <div className="col-md-6">
                  <select defaultValue="Selecione uma raça" onChange={this.handleSelectBreed} className="formFilter--select formFilter--select__year custom-select" id="inputGroupSelect01">
                    <option selected disabled={defaultBreedDisabled ? true : null}>Selecione uma raça</option>
                    {newBreeds && newBreeds.map(
                      breed => (<option value={breed}>{breed}</option>),
                    )}
                  </select>
                </div>
                <div className="col-md-6 ">
                  <select onChange={this.handleSelectColor} className="formFilter--select formFilter--select__year custom-select" id="inputGroupSelect01">
                    <option defaultValue disabled={defaultColorDisabled ? true : null}>Selecione a cor</option>
                    {colors.map(
                      (color) => (<option key={color.color} value={color.color}>{color.label}</option>),
                    )}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input className="formFilter--input" onChange={this.handleName} id="" placeholder='Digite o nome' />
                </div>
                <div className="col-md-6">
                  <select onChange={this.handleSelectFont} className="formFilter--select formFilter--select__year custom-select">
                    <option defaultValue disabled={defaultFontDisabled ? true : null}>Selecione a fonte</option>
                    {fonts.map(
                      (font) => (<option key={font.font} value={font.font}>{font.label}</option>),
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row pt-3">
                <div className="formFilter--advancedSearch d-flex align-items-center">
                  <a href="/" className="formFilter--advancedSearchLink pl-3">
                    <IoIosArrowForward />
                    Busca avançada
                  </a>
                </div>
                <div className="formFilter--cleanFilters d-flex align-items-center">
                  <a href="/" className="formFilter--cleanFiltersLink pl-3">Limpar filtros</a>
                </div>
                <div className="formFilter--seeOffers">
                  <button type="button" className="formFilter--btnSeeOffers">Ver Oferta</button>
                </div>
              </div>
            </div>
          </form>
        </div>

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
