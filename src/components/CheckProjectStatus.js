import React from "react"
import { render } from "react-dom"
import ProjectDetails from "./ProjectDetails";

class CheckProjectStatus extends React.Component {

    render() {
        const { shadow, reverseShadow } = this.props.loggedIn;
        let projectData;
        if (this.props.project === "Shadow") {
            projectData = shadow;
        }
        else {
            projectData = reverseShadow;
        }
        const callback = () => {
            return projectData;
        }
        return (
            <React.Fragment>
                <div className="pm-light-blue pm-icon-container shadow-container">
                    <span className="pm-text-field">{this.props.project}</span>
                    <span className="pm-status-field">{this.props.checkStatus(callback())}</span>
                    <div className="pm-plus-icon pm-display-none">╋</div>
                    <div className="pm-minus-icon ">╺</div>
                </div>
                <ProjectDetails projectData={callback()} {...this.props} />
            </React.Fragment>

        )
    }
}
export default CheckProjectStatus