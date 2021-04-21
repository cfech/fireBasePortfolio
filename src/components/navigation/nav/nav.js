import React from 'react'
import "./nav.css"
import { NavLink, withRouter } from "react-router-dom"

const nav = (props) => {
    // let backGroundImageSelector = "topPortion"

    // if (props.match.path === "/technologies") {
    //     backGroundImageSelector = "techTopPortion"
    // }


    let links = <div className="link__row">
        <NavLink exact className="m-lg-2 p-lg-2 navLink" to="/" >01 Home</NavLink>
        <NavLink exact className="m-lg-2 p-lg-2 navLink" to="/technologies" >02 Technologies</NavLink>
        <NavLink exact className="m-lg-2 p-lg-2 navLink" to="/certifications" >02 Certifications</NavLink>
        <a className="m-lg-2 p-lg-2 navLink" href="https://www.linkedin.com/in/connor-fech-99936514a/" target="_blank" rel="noopener noreferrer"> 04 LinkedIn</a>
        <a className="m-lg-2 p-lg-2 navLink" href="https://docs.google.com/document/d/18BXcytPTfkACci4s0MPdzPagMqCKndZFH2qNt9IM_hA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">05 Resume</a>
        <a className="m-lg-2 p-lg-2 navLink " href="https://github.com/cfech" target="_blank" rel="noopener noreferrer">06 Github</a>
    </div>

    // let menu =
    //     <div className="hamburger" onClick={props.openSideDrawer}>
    //         <i className="fab fa-buromobelexperte"></i>
    //     </div>

    return (

        // <div className={backGroundImageSelector}>
        //     <div className="shading" ></div>
        //     <nav className="navbar navbar-expand-lg navbar-light justify-content-center myNav">
        //         {/* <div className="navbar-brand namebox ml-lg-5 ml-xs-0"> */}
        //             {/* <a data-toggle="tooltip" data-placement="top" title="Go Home"  href="/" id="name">CONNOR FECH</a> */}

        //             <div id="name" className="navbar__name">
        //                 CONNOR FECH
        //         </div>

        //         {/* </div> */}

        //     </nav>
        //     {menu}
        //     {links}
        // </div>
        <div className="navigation">

            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                <li className="navigation__item"><NavLink exact className="navigation__link" to="/" >01 Home</NavLink></li>
                <li className="navigation__item"><NavLink exact className="navigation__link" to="/technologies" >02 Technologies</NavLink></li>
                <li className="navigation__item"><NavLink exact className="navigation__link" to="/certifications" >03 Certifications</NavLink></li>
                <li className="navigation__item"><a className="navigation__link" href="https://www.linkedin.com/in/connor-fech-99936514a/" target="_blank" rel="noopener noreferrer"> 04 LinkedIn</a></li>
                <li className="navigation__item"><a className="navigation__link" href="https://docs.google.com/document/d/18BXcytPTfkACci4s0MPdzPagMqCKndZFH2qNt9IM_hA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">05 Resume</a></li>
                <li className="navigation__item"><a className="navigation__link " href="https://github.com/cfech" target="_blank" rel="noopener noreferrer">06 Github</a></li>
                </ul>
            </nav>
        </div>
    )
}


export default withRouter(nav)