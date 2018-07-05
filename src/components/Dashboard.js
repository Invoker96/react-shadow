import React from "react";
import users from "../users";
import nomineeDashboard from "../css/nomineeDetails.css";

class Dashboard extends React.Component {

  render() {
    const { firstName, lastName } = this.props.users;
    const splicedValue = this.props.slotsView();
    const nominatedBy = "Self";
    return (
      <div className="dashboard-wrapper">
        <table className="pm-table-wrapper">
          <tbody className="pm-table-body">
            <thead className="pm-table-heading">
              <th>Sno</th>
              <th>Name</th>
              <th>Nominated By</th>
              <th>Assessment Status</th>
              <th>View Details</th>
            </thead>
            {splicedValue.map((key,index) => (
              <tr className="pm-table-heading">
                <td>
                    {index + 1}
                </td>
                <td>
                  {this.props.users[key].firstName} {this.props.users[key].lastName}
                </td>
                <td>
                  {nominatedBy}
                </td>
                <td>
                </td>
                <td>
                  <a href="/nominee/{{oracleId}}" className="pm-refLink">
                    view 
                  </a>
                </td>
              </tr>
            ))}
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
