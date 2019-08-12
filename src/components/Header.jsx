import React from 'react';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/"><img src="/webmotors.svg" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
