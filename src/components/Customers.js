import React from 'react'

const Customers = () => {
    return (
        <div className="customer-reviews">
            <div className=" my-5 container headings text-center" >
                  <h1 className="text-center text-dark font-weight-bold mb-1 text-uppercase"> happy clients</h1>
                  <p className="text-center">here what our clients say</p>
                 <div className="container">
                        
                      <div id="myCarousel" class="carousel slide" data-ride="carousel">
                         <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                 <li data-target="#myCarousel" data-slide-to="2"></li>
                         </ol>

  {/* <!-- Wrapper for slides --> */}
                        <div class="carousel-inner">
                          <div className="item active">
                            <div className="row">
                                 
                               <div className="col-lg-4 col-md-4 col-12">
                                        <div className="box">
                                             <a href="#"><img src="images/background.jpg" className="img-fluid img-thumbnail" /></a>
                                            <p className="m-4">lorem ipsum jejejeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                                            <h1>Koushik</h1>
                                            <h2>web developer</h2>
                                         </div>
                                   </div>
                                   <div className="col-lg-4 col-md-4 col-12">
                                        <div className="box">
                                             <a href="#"><img src="../src/images/background.jpg" className="img-fluid img-thumbnail" /></a>
                                            <p className="m-4">lorem ipsum jejejeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                                            <h1>Koushik</h1>
                                            <h2>web developer</h2>
                                         </div>
                                   </div>
                                   <div className="col-lg-4 col-md-4 col-12">
                                        <div className="box">
                                             <a href="#"><img src="../src/images/background.jpg" className="img-fluid img-thumbnail" /></a>
                                            <p className="m-4">lorem ipsum jejejeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                                            <h1>Koushik</h1>
                                            <h2>web developer</h2>
                                         </div>
                                   </div>
                             </div>
                            </div>

                             <div class="item">
                             <div className="row">
                                 
                                 <div className="col-lg-4 col-md-4 col-12">
                                          <div className="box">
                                               <a href="#"><img src="images/background.jpg" className="img-fluid img-thumbnail" /></a>
                                              <p className="m-4">lorem ipsum jejejeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                                              <h1>Koushik</h1>
                                              <h2>web developer</h2>
                                           </div>
                                     </div>
                                     <div className="col-lg-4 col-md-4 col-12">
                                          <div className="box">
                                               <a href="#"><img src="../src/images/background.jpg" className="img-fluid img-thumbnail" /></a>
                                              <p className="m-4">lorem ipsum jejejeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                                              <h1>Koushik</h1>
                                              <h2>web developer</h2>
                                           </div>
                                     </div>
                                     <div className="col-lg-4 col-md-4 col-12">
                                          <div className="box">
                                               <a href="#"><img src="../src/images/background.jpg" className="img-fluid img-thumbnail" /></a>
                                              <p className="m-4">lorem ipsum jejejeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                                              <h1>Koushik</h1>
                                              <h2>web developer</h2>
                                           </div>
                                     </div>
                               </div>
                              </div>

                            {/* <div class="item">
                            <div className="row">
                                 
                                 <div className="col-lg-4 col-md-4 col-12">
                                          <div className="box">
                                               <a href="#"><img src="images/background.jpg" className="img-fluid img-thumbnail" /></a>
                                              <p className="m-4">lorem ipsum jejejeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                                              <h1>Koushik</h1>
                                              <h2>web developer</h2>
                                           </div>
                                     </div>
                                     <div className="col-lg-4 col-md-4 col-12">
                                          <div className="box">
                                               <a href="#"><img src="../src/images/background.jpg" className="img-fluid img-thumbnail" /></a>
                                              <p className="m-4">lorem ipsum jejejeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                                              <h1>Koushik</h1>
                                              <h2>web developer</h2>
                                           </div>
                                     </div>
                                     <div className="col-lg-4 col-md-4 col-12">
                                          <div className="box">
                                               <a href="#"><img src="../src/images/background.jpg" className="img-fluid img-thumbnail" /></a>
                                              <p className="m-4">lorem ipsum jejejeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                                              <h1>Koushik</h1>
                                              <h2>web developer</h2>
                                           </div>
                                     </div>
                               </div>
                            </div> */}
                         </div>
                         

  {/* <!-- Left and right controls --> */}
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            
                         </div>
            </div>
        </div>
    )
}

export default Customers
