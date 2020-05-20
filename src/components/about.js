import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      

      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.png" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>A propos</h2>
            <p>Après plus de 15 ans d'expertise en IT et
Data, je me spécialise dans le métier de
Développeur Web Front-End pour plus de
technicité tout en restant dans le monde du
digital qui me passionne !
            </p>
            <p>Stack : HTML, CSS, JS, React.js, Node.js, Git, MySQL, Python</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Me contacter</h2>
                <p className="address">
                  <span>Marjolaine Baratte</span><br />
                  <span>Antony, France</span><br />
                  
                  <span>marjowolff@gmail.com</span><br />
                  <span>GitHub : @marjowolff</span><br />
                  <span>LinkedIn : in/marjolainebaratte/</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="images/Marjolaine Baratte Front end dev CV 2020.pdf" target="_blank" className="button"><i className="fa fa-download" />Téléchargez mon CV</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
    );
  
  }
}