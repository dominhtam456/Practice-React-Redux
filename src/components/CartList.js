import React, { Component } from 'react';
import Cart from './Cart';
import Purchase from './Purchase';

class CartList extends Component {
    render() {
        return (
            <section class="section">
                <div class="table-responsive">
                    <table class="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <Cart />
                            <Purchase />
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}
export default CartList;