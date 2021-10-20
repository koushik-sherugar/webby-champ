import React from "react";

const Service = () => {
  return (
    <div className="service">
      <div className="container headings text-center" id="serv-div">
        <h1 className="text-center font-weight-bold">WHAT DO WE OFFER</h1>
        <p className="text center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa.
        </p>
      </div>
      <div className="container ">
        <div className="row">
          <div className="service-left col-lg-6 col-md-12 col-10 offset-1 offset-lg-0">
            <div className="names my-3">
              <h1>HTML</h1>
              <div className="progress w-75">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  style={{ width: " 91%" }}
                >
                  91%
                </div>
              </div>
            </div>
            <div className="names my-3">
              <h1>CSS</h1>
              <div className="progress w-75">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
            </div>
            <div className="names my-3">
              <h1>JAVASCRIPT</h1>
              <div className="progress w-75">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                  style={{ width: "88%" }}
                >
                  88%
                </div>
              </div>
            </div>
            <div className="names my-3">
              <h1>REACTJS</h1>
              <div className="progress w-75">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
            <div className="names my-3">
              <h1>PYTHON</h1>
              <div className="progress w-75">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
            </div>
          </div>

          <div className="service-right mx-auto col-lg-6 col-md-12 col-10">
            <div className="row">
              <div className="service-icon col-lg-2 col-2 ">
                <i className="fa-3x fas fa-trophy"></i>
              </div>
              <div className="service-label col-lg-10 col-10">
                <h2>WEB DEVELOPMENT</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, ad?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="service-icon col-lg-2 col-2 ">
                <i className="fa-3x fas fa-trophy"></i>
              </div>
              <div className="service-label col-lg-10 col-10">
                <h2>APP DEVELOPMENT</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, ad?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="service-icon col-lg-2 col-2 ">
                <i className="fa-3x fas fa-trophy"></i>
              </div>
              <div className="service-label col-lg-10 col-10">
                <h2>DIGITAL MARKETING</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, ad?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
