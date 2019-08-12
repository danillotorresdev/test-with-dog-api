import React, { Component } from 'react';
import { IoIosPin, IoIosArrowForward } from 'react-icons/io';
import { connect } from 'react-redux';

import ActionCreators from '../redux/actionCreators';

class FormFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breedSelected: '',
    };

    this.handleSelectBreed = this.handleSelectBreed.bind(this);
  }

  componentDidMount() {
    const { loadBreeds, loadModels } = this.props;
    loadBreeds();
    loadModels();
  }

  componentDidUpdate(prevProps) {
    const { breeds, loadModels } = this.props;
    if (breeds.breedSelected !== prevProps.breeds.breedSelected) {
      // loadModels();
    }
  }

  handleSelectBreed(event) {
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

  render() {
    const { breeds, models, } = this.props;

    const breedsData = breeds.data.message;
    const newBreeds = this.json2array(breedsData);

    return (
      <div className="container pt-4">
        {JSON.stringify(breeds.breedSelected)}
        <div className="row">
          <form className="formFilter col-md-12 row">
            <div className="col-md-12">

            </div>
            <div className="col-md-6">
              <div className="form-group d-flex">
                <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="row form-group">
                <div className="col-md-6">
                  <select onChange={this.handleSelectBreed} className="formFilter--select formFilter--select__year custom-select" id="inputGroupSelect01">
                    <option defaultValue>Marca</option>
                    {newBreeds && newBreeds.map(
                      breed => (<option value={breed}>{breed}</option>),
                    )}
                  </select>
                </div>
                <div className="col-md-6 ">
                  <select className="formFilter--select formFilter--select__year custom-select" id="inputGroupSelect01">
                    <option defaultValue>Modelo</option>

                    {models.modelsData.map(
                      model => (<option key={model.ID}>{model.Name}</option>),
                    )}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <select className="formFilter--select formFilter--select__year custom-select" id="inputGroupSelect01">
                    <option defaultValue>Versao</option>
                    <option>R$ 10000</option>
                    <option>R$ 10000</option>
                    <option>R$ 10000</option>
                    <option>2016</option>
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
    models: state.models,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadBreeds: () => dispatch(ActionCreators.getBreedsRequest()),
    loadModels: () => dispatch(ActionCreators.getModelsRequest()),
    saveBreedSelected: breedSelected => dispatch(ActionCreators.saveBreedSelectedSuccess(breedSelected)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);
