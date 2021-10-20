import React from 'react'

const Pricing = () => {
    return (
        <div id="pricing-div">
            <div className=" my-5 container headings text-center" >
        <h1 className="text-center text-white font-weight-bold mb-5 "> our Pricing</h1>
             <div className="container">
            <div className="row">
               
            <div className="col-lg-4 col-12">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>BASIC</h3>
                            <div className="card-body my-4    text-capitalize">
                                <li >$<span className="price-num">30</span>/website</li>
                                <li >Fully responsive</li>
                                <li >source code will be provided</li>
                                <li >no Hosting service avilable</li>
                                <li > no Free domain name</li>
                                <li > no Helpline available 24/7</li>
                                <li>No 1 year free maintainance</li>


                                <div className="card-footer">

                                    <a href="#">purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12 second-card">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>STANDARD</h3>
                            <div className="card-body my-4  text-capitalize">
                                <li >$<span className="price-num">50</span>/website</li>
                                <li >Fully responsive</li>
                                <li >source code will be provided</li>
                                <li >Hosting service avilable</li>
                                <li >Free domain name</li>
                                <li > no Helpline available 24/7</li>
                                <li>No 1 year free maintainance</li>
                                <div className="card-footer">

                                    <a href="#">purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>Premium</h3>
                            <div className="card-body my-4  text-capitalize">
                                <li >$<span className="price-num">80</span>/website</li>
                                <li >Fully responsive</li>
                                <li >source code will be provided</li>
                                <li >Hosting service avilable</li>
                                <li >Free domain name</li>
                                <li >Helpline available 24/7</li>
                                <li >1 year free maintainance</li>
                                <div className="card-footer">

                                    <a href="#">purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div> 
        </div>
    )
}

export default Pricing
