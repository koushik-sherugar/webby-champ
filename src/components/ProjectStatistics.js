import React from 'react'

function ProjectStatistics() {
    return (
        <div className="ProjectStatistics">
             <div className="container headings my-5 text-center" id="serv-div">
                 <h1 className="text-center fs-2  fw-normal">Project Statistics</h1>
                     <p className="text center">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa.
                     </p>
            </div>
             <div className="container d-flex justify-content-around align-items-center text-center">
             <div >
                        <h1 className="count">1500</h1>
                        <p>days of work experience</p>
                 </div>
                  <div >
                        <h1 className="count">15</h1>
                        <p>awards won</p>
                 </div>
                 <div >
                        <h1 className="count">30</h1>
                        <p>websites created</p>
                 </div>
                 <div >
                        <h1 className="count">70</h1>
                        <p>happy clients</p>
                 </div>
            </div>
        </div>
    )
}

export default ProjectStatistics
