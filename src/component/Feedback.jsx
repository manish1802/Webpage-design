import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Feedback() {
  return (
    <div className="w-100 text-white bg-dark my-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 w-100">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center my-4">
              <h1>Leading Way In Building & Civil Construction</h1>
              <div className="d-flex justify-content-evenly w-75">
                <div style={{ marginRight: 10 }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      width: 10,
                      height: 10,
                      padding: 2,
                      borderRadius: 35,
                      marginRight: 10,
                    }}
                  />
                  <span>Professional staff</span>
                </div>
                <div style={{ marginRight: 10 }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      width: 10,
                      height: 10,
                      padding: 2,
                      borderRadius: 35,
                      marginRight: 10,
                    }}
                  />
                  <span>100% Satisfaction</span>
                </div>
                <div style={{ marginRight: 10 }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      width: 10,
                      height: 10,
                      padding: 2,
                      borderRadius: 35,
                      marginRight: 10,
                    }}
                  />
                  <span>Accurate Testing</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      width: 10,
                      height: 10,
                      padding: 2,
                      borderRadius: 35,
                      marginRight: 10,
                    }}
                  />
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-12 col-lg-6">
              <div
                className="d-flex flex-column justify-content-start  rounded-4 p-5"
                style={{ backgroundColor: "#ff7321" }}
              >
                <h5>Request A Quote</h5>
                <p>
                  Complete control over product allows us to our customers the
                  best quality price and services.We take great pride in
                  everything that we do in jhantraktra
                </p>
                <div className="mb-3 d-flex">
                  <input
                    type="email"
                    className="form-control mx-2"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3 d-flex">
                  <input
                    type="email"
                    className="form-control mx-2"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="w-100 mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="button" className="btn btn-dark w-100">
                  Submit Request
                </button>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div
                className="card rounded-4 p-5 text-light"
                style={{ backgroundColor: "#ff7321" }}
              >
                <h5 className="card-title text-light">Contact Info</h5>
                <h6>Our Location</h6>
                <p class="card-text">1149 AL Mariyah Street Abu Dhabi UAE</p>

                <h6>Quick Contact</h6>
                <p class="card-title">Email:(+971)123456789</p>
                <p class="card-text">Email:contact@jh0ntracktor.co</p>
                <h5>Opening Hours</h5>
                <p>Monday - Friday</p>
                <p>09:00 - 06:00</p>
                <h6 class="card-text">
                  Do You Have Any Question ,Just Contact Us to Get Help!
                </h6>
                <button type="button" className="btn btn-dark w-75 mx-auto">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
