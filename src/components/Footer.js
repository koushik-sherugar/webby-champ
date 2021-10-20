import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footersection text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 footer-div">
              <h3>About Webby Champ</h3>
              <p>
                In the world of developing technologies it required to all the
                organisations, companies to have a website of their own to
                provide customers the best experence than the others . we
                provide all the requirementss of the customers and make their
                business grow by the growing digitalization world .
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 footer-div ">
              <h3>Navigation Links</h3>
              <li >
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">contact us</a>
                <a href="#">services</a>
              </li>
            </div>
            <div className="col-lg-4 col-md-12 col-12 footer-div">
              <h3>News letter</h3>
              <p>
                for the enthusiastic personals who were interested to get
                updates from us
              </p>
              <div className=" container footer-news-mail">
                <div className="row align-items-center">
                  <div className=" col-12 ">
                    <div className="input-group  mb-3">
                      <input
                        type="email"
                        className="form-control "
                        placeholder="enter your email"
                        required
                        autoComplete="off"
                      />
                      <div className="d-flex input-group-append newsbtn">
                        <span className="input-group-text ">Subscribe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <p>
            <i class="fas fa-copyright  "></i> 2021 | template made by koushik
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
