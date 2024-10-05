import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { IoCloseSharp } from "react-icons/io5";
const BuyCoinModal = (props) => {
  const [spendValue, setSpendValue] = useState(4500);
  const [getValue, setGetValue] = useState();
  useEffect(() => {
    let refSpendValue = spendValue / props.buyCoinDetails.price;
    setGetValue(refSpendValue.toFixed(8).replace(/(\.0+|0+)$/, ""));
  }, [spendValue]);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
      // dialogClassName={`${style.maxHieghtModal}`}
    >
      <Modal.Body className="p-4 d-flex flex-wrap gap-3">
        <div className="col-12 d-flex justify-content-between">
          <svg
            width="42"
            height="42"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: "-10px" }}
          >
            <path
              d="M29.014 11.4c5.184 0 9.386 4.305 9.386 9.618 0 5.312-4.202 9.582-9.386 9.582H12.952c-5.185 0-9.352-4.27-9.352-9.582 0-5.313 4.167-9.618 9.352-9.618h16.062Zm-6.676 9.618c0 3.819 2.948 6.805 6.675 6.805 3.726 0 6.675-2.986 6.675-6.805 0-3.82-2.982-6.84-6.675-6.84-3.727 0-6.675 3.055-6.675 6.84Zm-2.677 0c0-2.674 1.05-5.104 2.745-6.84h-1.423c-3.728 0-6.675 3.055-6.675 6.84 0 3.784 2.812 6.666 6.404 6.805h1.695c-1.696-1.736-2.746-4.132-2.746-6.805Zm-13.384 0c0 3.784 2.948 6.805 6.675 6.805h1.423c-1.695-1.736-2.745-4.132-2.745-6.805 0-2.674 1.05-5.104 2.745-6.84h-1.423c-3.728 0-6.675 3.055-6.675 6.84Z"
              fill="var(--primary-text-color)"
            ></path>
          </svg>
          <h5>Buy Crypto </h5>
          <IoCloseSharp
            onClick={() => props.setBuyCoinModal(false)}
            style={{ fontSize: "27px", cursor: "pointer" }}
          />
        </div>
        <div
          className="col-12 rounded d-flex flex-wrap p-2"
          style={{ backgroundColor: "#f6f7f9" }}
        >
          <div className="col-12 d-flex">
            <p style={{ marginBottom: "0px" }}>You Spend</p>
          </div>
          <div className="col-12">
            <input
              type="text"
              style={{
                outline: "none",
                background: "transparent",
                border: "transparent",
                fontSize: "x-large",
                fontWeight: 500,
              }}
              value={spendValue}
              onChange={(e) => setSpendValue(e.target.value)}
            />
          </div>
        </div>
        <div
          className="col-12 rounded d-flex flex-wrap p-2"
          style={{ backgroundColor: "#f6f7f9" }}
        >
          <div className="col-12 d-flex">
            <p style={{ marginBottom: "0px" }}>You Get</p>
          </div>
          <div className="col-12 d-flex flex-wrap">
            <div className="col-9">
              <input
                type="text"
                style={{
                  outline: "none",
                  background: "transparent",
                  border: "transparent",
                  fontSize: "x-large",
                  fontWeight: 500,
                  width: "100%",
                }}
                value={getValue}
                onChange={(e) => setSpendValue(e.target.value)}
                readOnly={true}
              />
            </div>
            <div className="col-3 rounded" style={{ background: "white" }}>
              <img
                src={props.buyCoinDetails.icon}
                alt="logo"
                style={{ width: "25px", marginTop: "5px", marginLeft: "5px" }}
              />
              <p
                className="d-inline"
                style={{
                  fontSize: "17px",
                  fontWeight: 500,
                  position: "relative",
                  top: "4px",
                  left: "10px",
                }}
              >
                {props.buyCoinDetails.symbol}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <button
            className="w-100 py-3 rounded-4"
            style={{
              fontWeight: 500,
              border: "transparent",
              background: "#241d1c",
              color: "white",
            }}
          >
            Buy {props.buyCoinDetails.name}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BuyCoinModal;
