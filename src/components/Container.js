import React, { Component } from 'react';
import ProductList from './ProductList';
import Meassage from './Message';
import CartList from './CartList';

class App extends Component {
  render() {
    return (
        <main id="mainContainer">
        <div class="container">
          
            <ProductList />
            <Meassage />
            <CartList />
        </div>
    </main>
    );
  }
}

export default App;