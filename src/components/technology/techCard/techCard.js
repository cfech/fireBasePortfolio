//Imports
import React, {Component } from "react";
import"./techCard.css"


//Homework Component
class TechCard extends Component {
// const [technologies, setTechnologies] = useState(props.technologies)

state ={
    technologies : this.props.technologies
}


render(props) {

    


    return (

        <div className="col-lg-12 col-md-12 techCardB">
            <div className="text-center head">
                <p className="repoLinkTech">  <a className="repoLinkTech" href={this.props.href}
                    target="_blank" without rel="noopener noreferrer">{this.props.name}
                </a>
                    ||
                    <a className="repoLinkTech" href={this.props.github}
                        target="_blank" without rel="noopener noreferrer">Github Repo
                    </a>
                </p>
            </div>
            <div className="row">
                <div className="descriptionDiv col-lg-6 col-md-12">
                    {/* <h6 className="und descH6">Description</h6> */}
                    <br></br>
                    <p className="descriptionP">
                        {this.props.description}
                    </p>
                    <p className="disclaimer">{this.props.disclaimer}</p>
                </div>

                <div className="techDiv col-lg-6 col-md-12">
                    <h4 className="techTitle">Technologies</h4>
                    <br></br>
                    <ul className="techList">
                        {
                            this.state.technologies.map((item) => (
                                <li key={item}> {item}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>

        </div>
    )
}
}

//Exporting Homework Component
export default TechCard



