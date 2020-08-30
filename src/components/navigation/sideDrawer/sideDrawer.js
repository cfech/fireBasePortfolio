import React, { Fragment } from "react";
import { NavLink } from "react-router-dom"
import Backdrop from "../backdrop/backdrop"
import "../nav/nav.css"
import "./sideDrawer.css"


const sideDrawer = (props) => {

    let attachedClasses = "SideDrawer Closed"

    if (props.show) {
        attachedClasses = "SideDrawer Open"
    }

    return (
        <React.Fragment >
            <Backdrop show={props.show} clicked={props.closeSideDrawer} />


            <div className={attachedClasses}>

                <div className="navControls">

                    <NavLink exact className=" navLinkSide" to="/" >Home</NavLink>
                    <NavLink exact className="m-lg-2 p-lg-2 navLinkSide" to="/technologies" >Technologies</NavLink>
                    <NavLink exact className="m-lg-2 p-lg-2 navLinkSide" to="/certifications" >Certifications</NavLink>
                    <a className="m-lg-2 p-lg-2 navLinkSide" href="https://www.linkedin.com/in/connor-fech-99936514a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="m-lg-2 p-lg-2 navLinkSide" href="https://docs.google.com/document/d/18BXcytPTfkACci4s0MPdzPagMqCKndZFH2qNt9IM_hA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                    <a className="m-lg-2 p-lg-2 navLinkSide" href="https://github.com/cfech" target="_blank" rel="noopener noreferrer">Github</a>

                    <div className="closeButtonDiv">
                        <button className="m-lg-2 p-lg-2 navLinkSide" onClick={props.closeSideDrawer}>Close</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

};


export default sideDrawer