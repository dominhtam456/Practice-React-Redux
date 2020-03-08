import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div class="hidden-sn animated deep-purple-skin">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
