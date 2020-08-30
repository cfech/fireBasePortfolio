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
                <div className ="certificationsWindow">
                    <div className="UPennCertification">
                        <h1>Certification in Web Development of the University of Pennsylvania College of Liberal and Professional Studies</h1>
                         <img  src={require("../../assets/webDevCertification2.png")} ></img>
                    </div>
               
                </div>


            </div>
        )
    }
}

export default Certifications