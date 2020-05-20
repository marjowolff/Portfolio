import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
          
                <footer>
                  <div className="row">
                    <div className="twelve columns">
                      <ul className="social-links">
                      <li><a href="https://twitter.com/marjowolff"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/marjolainebaratte/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/marjowolff"><img className="fa" style={{"height" : "29px"}} src="images/github.png" alt="" /></a></li>
                      </ul>
                      <ul className="copyright">
                        <li style={{"color" : "white"}}>Design by Marjolaine Baratte</li>   
                      </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                  </div>
                </footer>
              
          
    );
  }
}