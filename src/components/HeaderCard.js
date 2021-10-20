import React from "react";

const HeaderCard = () => {
  return (
    <>
      <section className="h-card">
        <div className="container">
          <div className="row">
            <div className="div-card col-lg-4 col-md-4 col-12">
              <a href="">
                <i className="fa-3x fas fa-mobile-alt"></i>
              </a>
              <h1>FULLY RESPONSIVE</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat, officiis.
              </p>
            </div>
            <div className=" div-card col-lg-4 col-md-4 col-12">
              <a href="">
                <i className="fa-3x fas fa-trophy"></i>
              </a>
              <h1>TOP SEO RANKING SITES</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat, officiis.
              </p>
            </div>

            <div className="div-card col-lg-4 col-md-4 col-12">
              <a href="">
                <i className="fa-3x fas fa-cogs"></i>
              </a>
              <h1>EASY UPGRADABILITY</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat, officiis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderCard;
