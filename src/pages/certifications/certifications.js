import React, { Component } from "react"
import Nav from "../../components/navigation/nav/nav"
import SideDrawer from "../../components/navigation/sideDrawer/sideDrawer"
import "./certifications.css"

class Certifications extends Component {
    state = {
        showSideDrawer: false
    }

    render() {
        const openSideDrawerHandler = () => {
            console.log("clicked")
            // setShowSideDrawer(true)
            this.setState({
                showSideDrawer: true
            })
        }

        const closeSideDrawerHandler = () => {
            // setShowSideDrawer(false)
            this.setState({
                showSideDrawer: false
            })
        }

        return (
            <div className="App Certs">
                <Nav openSideDrawer={openSideDrawerHandler} ></Nav>
                <SideDrawer show={this.state.showSideDrawer} closeSideDrawer={closeSideDrawerHandler} />
                <div className="certificationsWindow">
                    <div className="card__parent">
                        <h3 className="card__parent--heading" >Certification in Web Development of the University of Pennsylvania</h3>
                        <div className="card--rotate">
                            <div className="card__front card__front--1"></div>
                            <div className="card__back card__back--1">
                                <div className="card__back-paragraph--wrapper">
                                    <p className="card__back--paragraph">
                                        A full stack coding Boot camp taught by professional web developers at the University of Pennsylvania College of Liberal and Professional Studies. This boot camp is a 12 week class with focus on the MERN stack. It begins with basic html,  css and advances to React. During this time, I learned javascript, jQuery, NodeJS, SQL, MongoDB, the MVC Structure, how go interact with web API's, git/version control and much more. I graduated from the boot camp with a portfolio of completed projects, done both individually and in a group setting. The most important thing I learned during this program was how to "teach" myself which gave me the ability to learn many other tools and languages going forward.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cert__disclaimer">*Flip for description</div>
                    <div className="card__parent">
                        <h3 className="card__parent--heading">React The Complete Guide</h3>
                        <div className="card--rotate">
                            <div className="card__front card__front--2">
                            </div>
                            <div className="card__back card__back--1">
                                <div className="card__back-paragraph--wrapper">
                                    <p className="card__back--paragraph">
                                        This course expanded my knowledge of React building upon what I learned at the UPenn boot camp. This is a more complete deep dive into the technology. This course provided me with knowledge about state management and how redux is used to make this task simpler, how react works behind the scenes, css modules and webkit. I also learned about firebase database, hosting and building an authentication system, as well as, substantial experience with React. Please check out the course<a className="card__back--link" rel="noopener noreferrer" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank">here</a>. Feel free to also check out, my version of the course project -> <a href="https://react-burger-builder-5a549.web.app/" target ="_blank" rel="noopener noreferrer" className="card__back--link">The Burger Builder</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className="card__parent">
                        <h3 className="card__parent--heading">MongoDB The Complete Developer Guide</h3>
                        <div className="card--rotate">
                            <div className="card__front card__front--3">
                            </div>
                            <div className="card__back card__back--1">
                                <div className="card__back-paragraph--wrapper">
                                    <p className="card__back--paragraph">
                                        In this course I built on my knowledge of MongoDB. This course was taught in javascript and mainly used the mongo shell to interact with the database. I reinforced my knowledge of the C.R.U.D operations, learned about indexing and filtering data. Learned how to use MongoDB's aggregation framework to group data together, as well as got exposure to Atlas and the concept of sharding. Please check out the course 
                                        <a className="card__back--link" rel="noopener noreferrer" href="https://www.udemy.com/course/mongodb-the-complete-developers-guide/" target="_blank">here</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card__parent">
                        <h3 className="card__parent--heading">Introduction To Windows PowerShell 5.1</h3>
                        <div className="card--rotate">
                            <div className="card__front card__front--4">
                            </div>
                            <div className="card__back card__back--1">
                                <div className="card__back-paragraph--wrapper">
                                    <p className="card__back--paragraph">
                                        In this course I got introduced to windows powershell. I learned the basics of what powershell is, what types of commands it accepts and what cmdlets are. I learned about how powershell is integrated into the windows ecosystem and why it is sometime important ot run powershell as an administrator. This course also touched on windows server, how to create a sever in virtual box, add organization units, and manage active user and computers. This is a good course for to begin with if you are completely new to windows powershell.
                                        <a className="card__back--link" rel="noopener noreferrer" href="https://www.udemy.com/course/windows-powershell-training/" target="_blank">here</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        )
    }
}

export default Certifications