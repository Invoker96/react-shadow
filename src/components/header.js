import React, { Fragment } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../css/Header.css";

class Header extends React.Component {
  render() {
    const { firstName, lastName } = this.props.loggedIn;

    return (
      <Fragment>
        <div className="Header-wrapper">
          <h2>
            {" "}
            Welcome {firstName}
            {lastName}
          </h2>

          <nav class="nav-list">
            <a className="link" href="<View Profile />">
              View Profile
            </a>

            <a className="link" href="<Login />">
              Logout{" "}
            </a>
          </nav>
        </div>

        {/*Outer wrapper */}

        <Breadcrumb className="navigationStyle">
          <BreadcrumbItem className="home-item">
            <a className="links" href="">
              Home
            </a>
          </BreadcrumbItem>

          <BreadcrumbItem className="item">
            <a className="links" href="</Nominee Dashboard">
              Nominee Dashboard
            </a>
          </BreadcrumbItem>

          <BreadcrumbItem className="item">
            <a className="links" href="<Cerification />">
              Nominee Details
            </a>
          </BreadcrumbItem>

          {/* <BreadcrumbItem className="item" active>Data</BreadcrumbItem> */}
        </Breadcrumb>
      </Fragment>
    );
  }
}

export default Header;
