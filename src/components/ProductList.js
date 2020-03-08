import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { connect } from 'react-redux'

class ProductList extends Component {


  render() {

    let products= this.props.products;

    let elements = products.map((product,index)=>{
      return <Product key={index} product = {product}/>
    })

    console.log(products);
    return (
        <section class="section">
        <h1 class="section-heading">Danh Sách Sản Phẩm</h1>
        <div class="row">
            {elements}
            
        </div>
    </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.showProductList 
  }

}

export default connect(mapStateToProps)(ProductList);