import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUserGroup,
  faFileLines,
  faHandshake,
  faBriefcase,
  faCheck,
  faPuzzlePiece,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Feedback from "./Feedback";
import Ourteam from "./Ourteam";

export default function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 w-100 position-relative ">
          <div className="position-relative">
            <img
              src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
              className="img-fluid w-100"
              style={{ height: 300, objectFit: "cover" }}
              alt="Background"
            />
          </div>
          <div
            className="position-absolute translate-middle w-50 bg-dark text-light d-flex flex-column justify-content-center align-items-center "
            style={{ opacity: 0.5, height: 300, top: "50%", left: "25%" }}
          >
            {/* <div className="col w-50  d-flex flex-column justify-content-center "> */}
            <div
              style={{
                display: "flex",
                width: "50%",
              }}
            >
              <span
                style={{
                  backgroundColor: "#ff7321",
                  height: 10,
                  width: 10,
                  marginTop: 3,
                }}
              ></span>
              <div style={{ marginLeft: 5 ,fontSize:15 }}>About Us</div>
            </div>
            <div className="w-50 fs-3" >Know About Us</div>
            <p className="text-white-50 w-50">
              Collaboratively administrate empowered markets plug and play
              networks dynamically procrastinated
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="row my">
        <div className="col-md-6 mb-3 mb-md-0  ">
          <div className="card bg-light border-0 p-5 h-100">
            <div className="card-body d-flex flex-column justify-content-center align-items-center ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZie-ga4-G5FHFxyTvD97Mh65TrdBcwoXV7-mwww_US5c5UgO3k8vtHSSX5pJtV4HdosM&usqp=CAU"
                className="img-fluid w-50 h-auto"
                alt="Background"
              />
              <div className="w-50 ">
                <h5 className="card-title my-3 text-dark">
                  We're Ready To Grow Your Business With Us
                </h5>
                <p className="card-text text-secondary">
                  Leverage agile frameworks provide synopshigh level overiews
                  valuse proposition
                </p>
                <a href="/" className="card-text">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 my-2">
            <div className="card-body">
              <div
                style={{
                  display: "flex",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#ff7321",
                    height: 10,
                    width: 10,
                    marginTop: 7,
                  }}
                ></span>
                <h5 style={{ marginLeft: 5 }}>Welcom Whitecollar</h5>
              </div>
              <h3 className="card-title">We Care About Your Business Plan </h3>
              <p className="card-text text-secondary">
                Leverage agile frameworks provide a robust synopsis for high level Overview. Iterative approaces to corporate strategy foster collaborative thinking to futher the overal
              </p>
              <p className="card-text text-secondary">
              Leverage agile frameworks provide a robust synopsis for high level Overview.Iterative approaces to corporate strategy foster collaborative 
              </p>
              <div className="col my-2">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          backgroundColor: "#ff7321",
                          width: 10,
                          height: 10,
                          padding: 5,
                          borderRadius: 35,
                        }}
                      />
                      <h4 className="card-title mx-2 my-0">Our Vision</h4>
                    </div>
                    <p className="card-text mx-4 text-secondary my-3">
                      Capitalize on hanging fruit to identify a ballpark value
                      added activity to beta clickthroughs
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card ">
                  <div className="card-body">
                    <div className="d-flex">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          backgroundColor: "#ff7321",
                          width: 10,
                          height: 10,
                          padding: 5,
                          borderRadius: 35,
                        }}
                      />
                      <h4 className="card-title mx-1 my-0">Our Mission</h4>
                    </div>
                    <p className="card-text mx-4 text-secondary my-3">
                      Capitalize on hanging fruit to identify a ballpark value
                      added activity to beta clickthroughs
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="/"
                className="btn btn-primary mt-3 border-0"
                style={{ backgroundColor: "#ff7321" }}
              >
                More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center my-5">
        <div
          style={{
            display: "flex",
          }}
        >
          <span
            style={{
              backgroundColor: "#ff7321",
              height: 10,
              width: 10,
              marginTop: 7,
            }}
          ></span>
          <h5 style={{ marginLeft: 5 }}>Work Process</h5>
        </div>
        <h1>How We Work</h1>
      </div>
      <div class="card-group w-75 mx-auto border-0  ">
        <div class="card bg-light border-0 mx-4">
          <div class="card-body text-center">
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{
                backgroundColor: "#ff7321",
                color: "white",
                width: 50,
                height: 50,
                padding: 10,
                borderRadius: 35,
              }}
            />
            <h5 className="card-title">Make Appointment</h5>
            <p className="card-text text-secondary">
              Leverage agile frameworks provide synopshigh level overiews valuse
              proposition
            </p>
            <h4 className="card-title">Testimonials</h4>
          </div>
        </div>
        <div class="card bg-light border-0 mx-4">
          <div class="card-body text-center">
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              style={{
                backgroundColor: "#ff7321",
                color: "white",
                width: 50,
                height: 50,
                padding: 10,
                borderRadius: 35,
              }}
            />
            <h5 className="card-title">Consultation</h5>
            <p className="card-text text-secondary">
              Leverage agile frameworks provide synopshigh level overiews valuse
              proposition
            </p>
            <h4 className="card-title">Testimonials</h4>
          </div>
        </div>
        <div class="card bg-light border-0">
          <div class="card-body text-center">
            <FontAwesomeIcon
              icon={faShieldHeart}
              style={{
                backgroundColor: "#ff7321",
                color: "white",
                width: 50,
                height: 50,
                padding: 10,
                borderRadius: 35,
              }}
            />
            <h4 className="card-title">Enjoy the Service</h4>
            <p className="card-text text-secondary">
              Leverage agile frameworks provide synopshigh level overiews valuse
              proposition
            </p>
            <h4 className="card-title">Testimonials</h4>
          </div>
        </div>
      </div>
      <div class="card-group mt-5 w-100 mx-auto border-0">
        <div class="card border-0 text-center bg-light">
          <div class="card-body">
            <FontAwesomeIcon
              icon={faBriefcase}
              style={{
                color: "#ff7321",
                width: 50,
                height: 50,
                padding: 10,
                borderRadius: 35,
              }}
            />
            <h3>10+</h3>
            <h5 class="card-title">Year of Experience</h5>
            <p class="card-text text-secondary">
              Synopsishigh level overviews value proposition
            </p>
          </div>
        </div>
        <div class="card border-0 text-center bg-light ">
          <div class="card-body ">
            <FontAwesomeIcon
              icon={faHandshake}
              style={{
                backgroundColor: "#ff7321",
                color: "white",
                width: 50,
                height: 50,
                padding: 10,
                borderRadius: 35,
              }}
            />

            <h3>5960</h3>
            <h5 class="card-title">Satisfied</h5>
            <p class="card-text text-secondary">
              Synopsishigh level overviews value proposition
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card border-0 text-center bg-light">
          <div class="card-body">
            <FontAwesomeIcon
              icon={faFileLines}
              style={{
                color: "#ff7321",
                width: 50,
                height: 50,
                padding: 10,
                borderRadius: 35,
              }}
            />
            <h3>50k</h3>
            <h5 class="card-title">IT Problems Solved</h5>
            <p class="card-text text-secondary">
              Synopsishigh level overviews value proposition
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Phone:(+971)123456789</small>
            </p>
          </div>
        </div>
        <div class="card border-0 text-center bg-light">
          <div class="card-body">
            <FontAwesomeIcon
              icon={faUserGroup}
              style={{
                backgroundColor: "#ff7321",
                color: "white",
                width: 50,
                height: 50,
                padding: 10,
                borderRadius: 35,
              }}
            />
            <h3>25k</h3>
            <h5 class="card-title">Pro Team Menbers</h5>
            <p class="card-text text-secondary">
              Synopsishigh level overviews value proposition
            </p>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center my-4">
        <div
          style={{
            display: "flex",
          }}
        >
          <span
            style={{
              backgroundColor: "#ff7321",
              height: 10,
              width: 10,
              marginTop: 7,
            }}
          ></span>
          <h5 style={{ marginLeft: 5 }}>Our Team</h5>
        </div>{" "}
        <h2>Meet Our Experts</h2>
      </div>
      <Ourteam />
      <Feedback />
      <Footer />
    </div>
  );
}
