import React from "react"
import { render } from "react-dom"

class NomineeInfo extends React.Component {
    checkAssessmentStatus = (shadow, reverseShadow) => {
        const shadowStatus = this.props.checkStatus(shadow);
        const reverseShadowStatus = this.props.checkStatus(reverseShadow);
        if (shadowStatus === 'Not Started' && reverseShadowStatus === 'Not Started') {
            return 'Not Started';
        } else if (shadowStatus === 'Completed' && reverseShadowStatus === 'Completed') {
            return 'Completed';
        }
        return 'In Progress';
    };

    render() {
        const { firstName, lastName, shadow, reverseShadow } = this.props.loggedIn;
        return (
            <React.Fragment>
                <div className="pm-light-blue name-container">
                    <span className="pm-text-field">Nominee Name</span>
                    <span className="pm-status-field">{firstName} {lastName}</span>
                </div>
                <div className="pm-light-blue">
                    <span className="pm-text-field">Assessment Status</span>
                    <span className="pm-status-field">{this.checkAssessmentStatus(shadow, reverseShadow)}</span>
                </div>
                <div className="pm-light-blue">
                    <span className="pm-text-field">Nominated By</span>
                    <span className="pm-status-field">Self</span>
                </div>
            </React.Fragment>
        )
    }
}
export default NomineeInfo;