//Imports
import React from "react";
import "./aboutme.css"

//AboutMe Component
function AboutMe() {
    //Return statement with about me and links section
    return (
        <section className="Search row justify-content-center ">
            <div className="col-lg-12 mt-4 card mb-4 col-12 mr-xs-0" id="aboutMeDiv">
                <div className="card-body">
                    {/* <h1>About Me</h1>
                    <hr className="lineBreak"></hr> */}
                    <img className="picture float-left col-12" src={require('../../sameSizePhotos/mypic.jpg')} alt="Graduation" />

                    <p className="aboutMe" >Hi, I'm Connor, a 2019 graduate from Rowan University.  I am a Full Stack Web Developer and Penn LPS Full Stack Bootcamp certified with focus on the MERN Stack.  I have developed several projects both independently and group-based. You can also view each technology used in these projects on my technology page.  I have several years of work experience across many different fields, including multiple professional internships in the finance industry requiring detail-oriented analysis, logistical problem solving and timely completion of tasks.  My passion for learning and applying new skills keeps me focused and ambitious.   </p>


                    <div className="row">
                        <h3 id="email" className="col-lg-4 col-md-6">Email: Cfech44@gmail.com</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

//Exporting AboutMe component
export default AboutMe;
