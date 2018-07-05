import React from "react";

import { render } from "react-dom";

class AssignProject extends React.Component {
  option = React.createRef();
  data = [];
  data1 = [];
  state = {
    index: {}
  };
  selectIndex = () => {
    const index = this.option.value.selectedIndex;
    this.setState({ index });
    console.log(index);
  };

  dateandStaus = () => {
    this.data1 = [];
    const { shadow } = this.props.loggedIn;
    const index = this.state.index;
    this.data1.push(
      <span>
        <span class="pm-shadow-text-field shadow-span">Status</span>
        <span class="pm-shadow-status-field shadow-span pm-status">
          {this.props.projectData[0].status}
        </span>
        <span class="pm-shadow-text-field shadow-span">Date Completed</span>
        <span class="pm-shadow-status-field shadow-span pm-date">
          {this.props.projectData[0].dateCompletion}
        </span>
      </span>
    );

    return this.data1;
  };

  displayContent = () => {
    this.data = [];

    for (let i = 0; i < this.props.val; i++) {
      this.data.push(
        <div class="dropdown-content pm-lighter-blue">
          <div class="pm-lighter-blue pm-shadow-status-row">
            <span class="pm-shadow-text-field shadow-span">Assigned To</span>

            <span class="shadow-span">
              <select
                class="pm-shadow-status-field reverse-shadow-dropdown"
                ref={this.option}
                onChange={this.selectIndex}
              >
                <option>-- Select --</option>

                {this.props.projectData.map(key => (
                  <option>{key.assignedTo}</option>
                ))}
              </select>
            </span>

            <span>{this.dateandStaus()}</span>
          </div>
        </div>
      );
    }

    return this.data;
  };

  render() {
    return <div>{this.displayContent()}</div>;
  }
}

export default AssignProject;
