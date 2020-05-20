import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
// import ContactUs from './components/contactus/contactus';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        {/* <ContactUs /> */}
        <Footer />
      </div>
    );
  }
}
export default App;
