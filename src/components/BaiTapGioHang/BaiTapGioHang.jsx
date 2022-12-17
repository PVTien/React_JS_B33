import React, { Component } from "react";

import data from "../../data/data.json";
import Modal from "./Modal";
import Product from "./Product";

export default class BaiTapGioHang extends Component {
  state = {
    productDetail: data[0],
  };

  renderShoesList = () => {
    return data.map((ele) => {
      return (
        <div className="col-4" key={ele.id}>
          <Product element={ele} showDetail={this.showDetail} />

          <Modal productDetail={this.state.productDetail} />
        </div>
      );
    });
  };

  showDetail = (ele) => {
    this.setState({
      productDetail: ele,
    });
  };

  render() {
    return (
      <div>
        <h1>Shoes shop</h1>
        <div className="row">{this.renderShoesList()}</div>
      </div>
    );
  }
}
