import React, {Component } from 'react';
import "./tech.css"
import TechCard from "../../components/technology/techCard/techCard"
// import json from "../../projects.json"
import TechFooter from "../../components/footer/techFooter"
import Nav from "../../components/navigation/nav/nav"
import SideDrawer from "../../components/navigation/sideDrawer/sideDrawer"
import projects from "../../new.json"

class technologies extends Component {
    constructor(props) {
        super(props)

        projects.forEach(p => {
            this[`${p.id}_ref`] = React.createRef()
        })
    }

    state = {
        showSideDrawer: false
    }



    // componentDidMount(){
    //     console.log(techCards)
    // }


    render(props) {
        // const [showSideDrawer, setShowSideDrawer] = useState(false)

        // const password = useRef()
        // const TravelApp = useRef()
        // const Car = useRef()
        // const Philly = useRef()
        // const UserDirectory = useRef()
        // const workout = useRef()
        // const googleBooks = useRef()
        // const weather = useRef()
        // const  burger = useRef()
        // const noteTaker = useRef()
        // const ReadMe = useRef()
        // const TeamGenerator = useRef()
        // const EmployeeTracker = useRef()
        // const DailyPlanner = useRef()
        // const multipleChoice = useRef()

        // const password = React.createRef(2)


        // const scroll = () => {
        //     console.log(this['0_ref'].current)

        //     this['0_ref'].current.scrollIntoView({behavior: "smooth"})
        // }




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

        let techCards = null

        techCards = projects.map(p => (
            <TechCard key={p.id} ref={this[`${p.id}_ref`]} href={p.href} name={p.name} github={p.github} technologies={p.technologies} description={p.description} disclaimer={p.disclaimer} />
        ))
        console.log(techCards)
        return (
            <div className="App tech">
                <Nav openSideDrawer={openSideDrawerHandler} ></Nav>
                <SideDrawer show={this.state.showSideDrawer} closeSideDrawer={closeSideDrawerHandler} />
                <div className="container projects">
                    {/* <button onClick={scroll}>Scroll</button> */}
                    {techCards}



                    {/* <div className="directory">
        <div onClick ={()=> {TravelApp.current.scrollIntoView({ behavior: "smooth" })}}>Travel-With-Me</div>

            </div> */}




                    {/* <div ref={TravelApp}>
                    <TechCard key={json[14].id} href={json.href} name={json[14].name} github={json[14].github} technologies={json[14].technologies} description={json[14].description} disclaimer={json[14].disclaimer} />
                </div>


                <div ref={Car}>
                    <TechCard key={json[12].id} href={json[12].href} name={json[12].name} github={json[12].github} technologies={json[12].technologies} description={json[12].description} disclaimer={json[12].disclaimer} />
                </div>


                <div ref={Philly}></div>
                <TechCard key={json[11].id} href={json[11].href} name={json[11].name} github={json[11].github} technologies={json[11].technologies} description={json[11].description} disclaimer={json[11].disclaimer} />

                <div ref={UserDirectory}></div>
                <TechCard key={json[9].id} href={json[9].href} name={json[9].name} github={json[9].github} technologies={json[9].technologies} description={json[9].description} />

                <div ref={workout}></div>
                <TechCard key={json[10].id} href={json[10].href} name={json[10].name} github={json[10].github} technologies={json[10].technologies} description={json[10].description} />

                <div ref={googleBooks}></div>
                <TechCard key={json[13].id} href={json[13].href} name={json[13].name} github={json[13].github} technologies={json[13].technologies} description={json[13].description} />

                <div ref={weather}></div>
                <TechCard key={json[4].id} href={json[4].href} name={json[4].name} github={json[4].github} technologies={json[4].technologies} description={json[4].description} />

                <div ref={burger}></div>
                <TechCard key={json[8].id} href={json[8].href} name={json[8].name} github={json[8].github} technologies={json[8].technologies} description={json[8].description} />

                <div ref={noteTaker}></div>
                <TechCard key={json[5].id} href={json[5].href} name={json[5].name} github={json[5].github} technologies={json[5].technologies} description={json[5].description} />

                <div ref={ReadMe}></div>
                <TechCard key={json[0].id} href={json[0].href} name={json[0].name} github={json[0].github} technologies={json[0].technologies} description={json[0].description} />

                <div ref={TeamGenerator}></div>
                <TechCard key={json[1].id} href={json[1].href} name={json[1].name} github={json[1].github} technologies={json[1].technologies} description={json[1].description} />

                <div ref={EmployeeTracker}></div>
                <TechCard key={json[6].id} href={json[6].href} name={json[6].name} github={json[6].github} technologies={json[6].technologies} description={json[6].description} />


                <div ref={DailyPlanner}></div>
                <TechCard key={json[3].id} href={json[3].href} name={json[3].name} github={json[3].github} technologies={json[3].technologies} description={json[3].description} />

                <div ref={multipleChoice}>
                    <TechCard key={json[7].id} href={json[7].href} name={json[7].name} github={json[7].github} technologies={json[7].technologies} description={json[7].description} />
                </div>


                <div ref={password}>
                    <TechCard key={json[2].id} href={json[2].href} name={json[2].name} github={json[2].github} technologies={json[2].technologies} description={json[2].description} />
                </div> */}



                </div>
                <TechFooter />
            </div>
        );
    }
}

export default technologies