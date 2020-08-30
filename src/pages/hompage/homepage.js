import React, {useState} from 'react';
import AboutMe from "../../components/aboutMe/aboutme"
import Project from "../../components/projects/projectCard"
import Homework from "../../components/homework/homeworkCard/homeworkCard"
import homeworks from "../../projects.json"
import Footer from "../../components/footer/footer"
import TechnologyDiv from "../../components/technology/technologies"
import "./main.css"
import Nav from "../../components/navigation/nav/nav"
import SideDrawer from "../../components/navigation/sideDrawer/sideDrawer"


function Homepage(props) {

const [showSideDrawer, setShowSideDrawer] = useState(false)

const openSideDrawerHandler = () => {
    console.log("clicked")
    setShowSideDrawer(true)
}

const closeSideDrawerHandler = () => {
    setShowSideDrawer(false)
}
    return (
        <div className="App home">
            <Nav openSideDrawer = {openSideDrawerHandler} ></Nav>
            <SideDrawer show = {showSideDrawer} closeSideDrawer={closeSideDrawerHandler}/>
            <main
                className="container justify-content-center">

                <div className="row">
                    <div className="col-md-12 mt-4 col-xs-12">
                        <AboutMe />
                    </div>
                </div>

                <TechnologyDiv />



                <div className="row justify-content-center projectSection">
                    <div className="col-lg-12 mt-4 col-xs-12 ">
                        <h1 className="header">GROUP PROJECTS</h1>
                        <hr></hr>

                        <div className="row justify-content-center">
                            <Project key={homeworks[14].id} src={require("../../sameSizePhotos/traveWMS.png")} href={homeworks[14].href} name={homeworks[14].name} github={homeworks[14].github} />

                            <Project key={homeworks[12].id} src={require("../../sameSizePhotos/carAmplifyS.png")} href={homeworks[12].href} name={homeworks[12].name} github={homeworks[12].github} />
                            <Project key={homeworks[11].id} src={require("../../sameSizePhotos/whpS.png")} href={homeworks[11].href} name={homeworks[11].name} github={homeworks[11].github} />


                        </div>
                    </div>
                </div>

                <div className="row justify-content-center homeworkSection  ">
                    <div className="col-lg-12 mt-4 col-xs-12">
                        <h1 className="header">INDIVIDUAL PROJECTS</h1>

                        <hr></hr>
                        <div className="row  justify-content-center">

                            <Homework key={homeworks[9].id} src={require("../../sameSizePhotos/employeeDirectorS.png")} href={homeworks[9].href} name={homeworks[9].name} github={homeworks[9].github} />
                            <Homework key={homeworks[10].id} src={require("../../sameSizePhotos/fitnessTrackerS.png")} href={homeworks[10].href} name={homeworks[10].name} github={homeworks[10].github} />
                            <Homework key={homeworks[13].id} src={require("../../sameSizePhotos/googleBooksS.png")} href={homeworks[13].href} name={homeworks[13].name} github={homeworks[13].github} />

                            <Homework key={homeworks[4].id} src={require("../../sameSizePhotos/weatherDashboardS.png")} href={homeworks[4].href} name={homeworks[4].name} github={homeworks[4].github} />
                            <Homework key={homeworks[8].id} src={require("../../sameSizePhotos/burgerAppS.png")} href={homeworks[8].href} name={homeworks[8].name} github={homeworks[8].github} />
                            <Homework key={homeworks[5].id} src={require("../../sameSizePhotos/noteTakerS.png")} href={homeworks[5].href} name={homeworks[5].name} github={homeworks[5].github} />

                            <Homework key={homeworks[0].id} src={require("../../sameSizePhotos/readMeS.png")} href={homeworks[0].href} name={homeworks[0].name} github={homeworks[0].github} />
                            <Homework key={homeworks[1].id} src={require("../../sameSizePhotos/teamProfileS.png")} href={homeworks[1].href} name={homeworks[1].name} github={homeworks[1].github} />
                            <Homework key={homeworks[6].id} src={require("../../sameSizePhotos/employeeTrackerS.png")} href={homeworks[6].href} name={homeworks[6].name} github={homeworks[6].github} />

                            <Homework key={homeworks[3].id} src={require("../../sameSizePhotos/workDaySchedulerS.png")} href={homeworks[3].href} name={homeworks[3].name} github={homeworks[3].github} />
                            <Homework key={homeworks[7].id} src={require("../../sameSizePhotos/quizS.png")} href={homeworks[7].href} name={homeworks[7].name} github={homeworks[7].github} />
                            <Homework key={homeworks[2].id} src={require("../../sameSizePhotos/passwordGeneratorS.png")} href={homeworks[2].href} name={homeworks[2].name} github={homeworks[2].github} />

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Homepage