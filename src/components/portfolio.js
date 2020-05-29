import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
          
                <section id="portfolio">
                  <div className="row">
                    <div className="twelve columns collapsed">
                      <h1>Mon portfolio</h1>
                      <h1 style={{"font-size" : "12px"}}>- Cliquez sur les vignettes pour en savoir plus -</h1>
                      {/* portfolio-wrapper */}
                      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-01" title>
                              <img alt="" src="images/Blog photo.png" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>Blog d'un photographe</h5>
                                  <p>HTML | CSS | JS</p>
                                </div>
                              </div>
                              <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                          </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-02" title>
                              <img alt="" src="images/Travel Memory Game.png" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>Memory Game</h5>
                                  <p>Application React</p>
                                </div>
                              </div>
                              <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                          </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-03" title>
                              <img alt="" src="images/Pole position.png" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>Pôle position</h5>
                                  <p>Application React avec appels API</p>
                                </div>
                              </div>
                              <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                          </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-04" title>
                              <img alt="" src="images/WIP.png" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>Pimp Your Waste</h5>
                                  <p>Travail pour un client final - en cours de construction</p>
                                </div>
                              </div>
                              <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                          </div>
                        </div> {/* item end */}
                        
                      </div> {/* portfolio-wrapper end */}
                    </div> {/* twelve columns end */}
                    {/* Modal Popup
                    --------------------------------------------------------------- */}
                    <div id="modal-01" className="popup-modal mfp-hide">
                      <img className="scale-with-grid" src="images/Blog photo.png" alt="" />
                      <div className="description-box">
                        <h4>Blog d'un photographe - Projet Fictif</h4>
                        <p>Blog responsive entièrement réalisé en HTML, CSS et JS natif.</p>
                        <span className="categories"><i className="fa fa-tag" />JS Vanilla</span>
                      </div>
                      <div className="link-box">
                        <a href="https://marjowolff.github.io/Bob-Colibri.com-Animation-JS/" target="_blank">Lien</a>
                        <a className="popup-modal-dismiss">Fermer</a>
                      </div>
                    </div>{/* modal-01 End */}
                    <div id="modal-02" className="popup-modal mfp-hide">
                      <img className="scale-with-grid" src="images/Travel Memory Game.png" alt="" />
                      <div className="description-box">
                        <h4>Travel Memory Game</h4>
                        <p>Application React réalisée en 24h (Hackathon)</p>
                        <span className="categories"><i className="fa fa-tag" />React</span>
                      </div>
                      <div className="link-box">
                        <a href="https://travel-memory-game.netlify.app/" target="_blank">Lien</a>
                        <a className="popup-modal-dismiss">Fermer</a>
                      </div>
                    </div>{/* modal-02 End */}
                    <div id="modal-03" className="popup-modal mfp-hide">
                      <img className="scale-with-grid" src="images/Pole position.png" alt="" />
                      <div className="description-box">
                        <h4>Pôle position</h4>
                        <p>Application React basée sur 2 appels API simultanés : retrouvez des offres d'emploi en fonction du temps de transport en commun !</p>
                        <span className="categories"><i className="fa fa-tag" />React</span>
                      </div>
                      <div className="link-box">
                        <a href="https://pole-position.netlify.app/" target="_blank">Lien</a>
                        <a className="popup-modal-dismiss">Fermer</a>
                      </div>
                    </div>{/* modal-03 End */}
                    <div id="modal-04" className="popup-modal mfp-hide">
                      <img className="scale-with-grid" src="images/WIP.png" alt="" />
                      <div className="description-box">
                        <h4>Pimp Your Waste</h4>
                        <p>Projet client en cours de réalisation</p>
                        <span className="categories"><i className="fa fa-tag" />React, Node</span>
                      </div>
                      <div className="link-box">
                        <a href="">Details</a>
                        <a className="popup-modal-dismiss">Fermer</a>
                      </div>
                    </div>{/* modal-04 End */}
                    
                  </div> {/* row End */}
                </section>
              );
          
    
  }
}