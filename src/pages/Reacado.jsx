import React from 'react';
import {Link} from 'react-router-dom';

const Recado = () => (
  <div className="container">
    <div className="row">

      <div className="box d-flex flex-column justify-content-center text-center">
            <p className="w-75 w-sm-100">
              {'Gostaria de agradecer pela oportunidade de estar participando deste processo seletivo. Busquei usar o máximo de ferramentas, metodologias e processos que utilizo no dia a dia.'}
            </p>
            <Link to="/Home" className="btn btn-success">Vamos ao teste :)</Link>
      </div>

      </div>
    </div>
);

export default Recado;
