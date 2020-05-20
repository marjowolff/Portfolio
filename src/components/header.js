import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (

      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Ceci est mon portfolio </h1>
            <h3>Je m'appelle Marjolaine Baratte, je suis <span>développeuse Front-end</span>, spécialisée en <span>React.js</span>. Ce site a pour vocation de rassembler l'ensemble des travaux réalisés dans le cadre de mon apprentissage. </h3>
            <h3>Bonne navigation !</h3>
            <hr />
            <ul className="social">
              <li><a href="https://twitter.com/marjowolff"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/marjolainebaratte/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/marjowolff"><img className="fa" style={{"height" : "29px"}} src="images/github.png" alt="" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );
    ;
  }
}