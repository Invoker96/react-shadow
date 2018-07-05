import React, { Fragment } from "react";
import users from "../users";
import Dashboard from "./Dashboard";
import Paging from "./Paging";

class NomineeDashboard extends React.Component {
  state = {
    count : 0,
    pages: {
      perPage: 8,
      current: 1,
    }
  }
  handleClick = (event) => {
    const pages = {...this.state.pages}
    pages.current = Number(event.target.id)
    this.setState({ pages: pages });
  }
  slotsView = () => {
    const { current, perPage } = this.state.pages;
    const indexOfLast = current * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentTodos = Object.keys(this.props.users).slice(indexOfFirst, indexOfLast);  
    return currentTodos;
  }
  render() {
    return (
      <Fragment>
      <Dashboard
        users={this.props.users}
        slotsView={this.slotsView}
      />
      <Paging
        users={this.props.users}      
        pages={this.state.pages}
        handleClick={this.handleClick}
      />
      </Fragment>
    );
  }
}

export default NomineeDashboard;
