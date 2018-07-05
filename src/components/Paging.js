import React from "react";
import Pagination from "../css/Pagination.css";

class Paging extends React.Component {
  render() {
    const details = Object.keys(this.props.users);
    const { current, perPage } = this.props.pages;
    const pageNumbers = [];
    for (let idx = 1; idx <= Math.ceil(details.length / perPage); idx++) {
      pageNumbers.push(idx);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
          <li key={number} id={number} onClick={this.props.handleClick}>
            {number}
          </li>
      );
    });
    return (
      <div>
        <ul id="page-numbers">{renderPageNumbers}</ul>
		<li className="current-page">{this.props.pages.current}/{pageNumbers.length}</li>		
      </div>
    );
  }
}

export default Paging;
