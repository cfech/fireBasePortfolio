//Imports
import React from "react";
import "./teshnologiesdiv.css"



//Homework Component
function TechnologyDiv() {
    return (
        <div className="row techRow justify-content-center">

            <div className="col-lg-2 col-md-4 col-6">
                <img src={require("../../TechnologyPhotos/react.png")} alt="react.js" className="techImages" />
            </div>
            <div className="col-lg-2 col-md-4 col-6">

                <img src={require("../../TechnologyPhotos/javascript.png")} alt="javascript" className="techImages" />
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <img src={require("../../TechnologyPhotos/git.jpg")} alt="git" className="techImages" />
            </div>
            <div className="col-lg-2 col-md-4 col-6">

                <img src={require("../../TechnologyPhotos/nodejs.png")} alt="node.js" className="techImages" />
            </div>
            <div className="col-lg-2 col-md-4 col-6">

                <img src={require("../../TechnologyPhotos/mongo.png")} alt="mongoDB" className="techImages" />
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <img src={require("../../TechnologyPhotos/heroku.png")} alt="heroku" className="techImages" />
            </div>
        </div>
    )

}

export default TechnologyDiv