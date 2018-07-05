import React from "react";
import { render } from 'react-dom';
import AssignProject from "./AssignProject";

class ProjectDetails extends React.Component {
   options = React.createRef();
    state = {
        values: {}
    }

    selectedValue = () => {
        const index = this.options.value.selectedIndex;
        this.setState({ values: index })
    }

    render() {
        return (
            <React.Fragment>
                <div class="pm-lighter-blue reverse-shadow-details">
                    <span class="pm-text-field"> No of {this.props.project} Required </span>
                    <select class='reverse-shadow-count reverse-shadow-dropdown' onChange={this.selectedValue} ref={this.options}>
                        <option value='select'>-- Select --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <AssignProject {...this.props} val={this.state.values} />
                </div>
            </React.Fragment>

        )
    }
}
export default ProjectDetails;