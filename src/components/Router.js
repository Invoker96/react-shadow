import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Certification from "./Certification";
import Dashboard from "./Dashboard";
import NomineeDashboard from "./NomineeDashboard";
import NotFound from "./NotFound";
import sampleData from "../users";
import Paging from "./Paging";

class Router extends React.Component {
  state = {
    loggedIn: {},
    users: {}
  };
  componentDidMount = () => {
    let users = { ...this.state.users };
    users = sampleData;
    this.setState({ users: sampleData });
  };
  loggedInPerson = key => {
    let loggedIn = { ...this.state.loggedIn };
    loggedIn = key;
    this.setState({ loggedIn });
  };
  throwData = key => {
    let loggedIn = { ...this.state.loggedIn };
    loggedIn = key;
    this.setState({ loggedIn });
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Login
                loggedIn={this.state.loggedIn}
                loggedInPerson={this.loggedInPerson}
                data={this.state.users}
                throwData={this.throwData}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/certification-details/:userId"
            render={() => <Certification loggedIn={this.state.loggedIn} />}
          />
          <Route
            exact
            path="/nominee-dashboard"
            render={() => (
              <NomineeDashboard
                loggedIn={this.state.loggedIn}
                users={this.state.users}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
