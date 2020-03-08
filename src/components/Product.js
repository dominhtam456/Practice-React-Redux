import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
        <div class="col-lg-4 col-md-6 mb-r">
        <div class="card text-center card-cascade narrower">
            <div class="view overlay hm-white-slight z-depth-1">
                <img src={this.props.product.img}
                    class="img-fluid" alt="" />
                <a>
                    <div class="mask waves-light waves-effect waves-light"></div>
                </a>
            </div>
            <div class="card-body">
                <h4 class="card-title">
                    <strong>
                        <a>{this.props.product.name}</a>
                    </strong>
                </h4>
                <ul class="rating">
                    <li>
                        <i class="fa fa-star"></i>
                    </li>
                    <li>
                        <i class="fa fa-star"></i>
                    </li>
                    <li>
                        <i class="fa fa-star"></i>
                    </li>
                    <li>
                        <i class="fa fa-star"></i>
                    </li>
                    <li>
                        <i class="fa fa-star"></i>
                    </li>
                </ul>
                <p class="card-text">
                {this.props.product.description}
                </p>
                <div class="card-footer">
                    <span class="left">{this.props.product.price}$</span>
                    <span class="right">
                        <a class="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Product;