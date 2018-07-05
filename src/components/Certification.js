import React from "react";
import PropTypes from "prop-types";
import NomineeInfo from "./NomineeInfo";
import "../css/Certification.css";
import CheckProjectStatus from "./CheckProjectStatus";

class Certification extends React.Component {
  static propTypes = {
    match: PropTypes.object
  };
  state = {
    shadow: "Shadow",
    reverseShadow: "Reverse Shadow"

  }

  checkStatus = project => {
    let checkStarted = 0;
    let checkCompleted = 0;
    for (let index = 0; index < project.length; index++) {
      if (project[index].status === 'not started') {
        checkStarted += 1;
      } else if (project[index].status === 'completed') {
        checkCompleted += 1;
      }
    }
    if (checkStarted === 3) {
      return 'Not Started';
    } else if (checkCompleted === 3) {
      return 'Completed';
    }
    return 'In Progress';
  };

  render() {
    return (
      <div className="pm-template-wrapper">
        <NomineeInfo checkStatus={this.checkStatus} loggedIn={this.props.loggedIn} />
        <CheckProjectStatus project={this.state.shadow} checkStatus={this.checkStatus} loggedIn={this.props.loggedIn} />
        <CheckProjectStatus project={this.state.reverseShadow} checkStatus={this.checkStatus} loggedIn={this.props.loggedIn} />
      </div>
    );
  }
}

export default Certification;
