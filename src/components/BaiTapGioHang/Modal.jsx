import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { name, price, description, quantity, image } =
      this.props.productDetail;

    return (
      <div
        className="modal fade"
        id="myModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thông tin sản phẩm</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body text-left">
              <img className="img-thumbnail" src={image} alt="#" />
              <h4>{name}</h4>
              <p>
                <strong>Mô tả: </strong>
                {description}
              </p>
              <p>
                <strong>Số lượng: </strong>
                {quantity}
              </p>
              <p className="text-danger">
                <strong>Giá: </strong>
                {price} $
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
