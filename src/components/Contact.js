import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactus">
        <div className=" my-5 container headings text-center">
          <h1 className="text-center text-dark font-weight-bold mb-1 mt-5 text-uppercase">
            Contact Us
          </h1>
          <p className="text-center text-capitalize">
            we are always love to get feedbacks and respond to you
          </p>
          <div className=" container ">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 col-1">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter your name"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="enter your email"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className=" mb-3">
                    <textarea
                      className="form-control"
                      id="comment"
                      rows="4"
                      placeholder="enter your message"
                    ></textarea>
                  </div>

                  <button type="submit" className=" mt-3 btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newsLetter">
        <div className=" my-5 container headings text-center">
          <h2 className="text-center text-dark font-weight-bold mb-3 mt-5 text-capitalize">
            subscribe to our newsletter
          </h2>
        </div>

        <div className=" container ">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-8 col-10 ">
              <div className="input-group  mb-3">
                <input
                  type="email"
                  className="form-control "
                  placeholder="enter your email "
                  required
                  autoComplete="off"
                />
                <div className="d-flex input-group-append ">
                  <span className="input-group-text " >Subscribe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
