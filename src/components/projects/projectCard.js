//Imports
import React from "react";
import "./projectCard.css"

//Project Component
function Project(props) {
    return (
        <div className="text-white col-md-10 mb-4 mt-4 p-0 my-2 mx-2 ml-4">

            <img src={props.src} id="homeworkPic" className="card-img"
                alt="README Generator" />


            <div className="text-center">
                <p className="homeworkLink">  <a href={props.href}
                    target="_blank" without rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="See project">{props.name}
                </a>
                    ||
                    <a href={props.github}
                        target="_blank" without rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="See github">Github Repo
                    </a>
                    ||
                    <a href="/technologies"
                        data-toggle="tooltip" data-placement="top" title="See technologies" >Technologies
                    </a>

                </p>
            </div>
        </div>
    )
}

//Project Component
export default Project;
