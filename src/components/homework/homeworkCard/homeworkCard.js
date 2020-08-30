//Imports
import React from "react";
import "./homework.css"

//Homework Component
function Homework(props) {
    return (

        <div className="text-white col-lg-3 mb-4 mt-4 p-0 my-2 mx-2 ml-4 col-md-10">
            <img src={props.src} id="homeworkPic" className="card-img"
                alt="README Generator" />
            <div className="text-center">
                <p className="homeworkLink">  <a href={props.href}
                    target="_blank" without rel="noopener noreferrer">{props.name}
                </a>
                    ||
                    <a href={props.github}
                        target="_blank" without rel="noopener noreferrer">Github Repo
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

//Exporting Homework Component
export default Homework