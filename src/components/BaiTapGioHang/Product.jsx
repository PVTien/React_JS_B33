import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { image, name, price } = this.props.element;
    return (
      <div className="card">
        <img className="card-img-top" src={image} alt="#" />
        <div className="card-body text-left">
          <h4 className="card-title">{name}</h4>
          <p className="card-text text-danger">{price} $</p>
          <button
            onClick={() => {
              this.props.showDetail(this.props.element);
            }}
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#myModal"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
