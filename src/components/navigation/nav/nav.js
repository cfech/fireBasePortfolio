import React from 'react'
import "./nav.css"
import { NavLink, withRouter } from "react-router-dom"



const nav = (props) => {


    let backGroundImageSelector = "topPortion"

    if (props.match.path === "/technologies") {
        backGroundImageSelector = "techTopPortion"
    }


    let links = <div className="linkS">
        <NavLink exact className="m-lg-2 p-lg-2 navLink" to="/" >Home</NavLink>
        <NavLink exact className="m-lg-2 p-lg-2 navLink" to="/technologies" >Technologies</NavLink>
        <NavLink exact className="m-lg-2 p-lg-2 navLink" to="/certifications" >Certifications</NavLink>
        <a className="m-lg-2 p-lg-2 navLink" href="https://www.linkedin.com/in/connor-fech-99936514a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="m-lg-2 p-lg-2 navLink" href="https://docs.google.com/document/d/18BXcytPTfkACci4s0MPdzPagMqCKndZFH2qNt9IM_hA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        <a className="m-lg-2 p-lg-2 navLink " href="https://github.com/cfech" target="_blank" rel="noopener noreferrer">Github</a>



    </div>

    let menu =
        <div className="hamburger" onClick={props.openSideDrawer}>
            <i className="fab fa-buromobelexperte"></i>
        </div>




    return (
        <div className={backGroundImageSelector}>
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center myNav">
                <a data-toggle="tooltip" data-placement="top" title="Go Home" className="navbar-brand namebox ml-lg-5 ml-xs-0" href="/">CONNOR FECH</a>
            </nav>
            {menu}
            {links}


        </div>
    )
}


export default withRouter(nav)