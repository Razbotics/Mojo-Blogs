import React, { Component } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

class TableHeader extends Component {
  raiseSort = (path) => {
    const { sortColumn } = this.props;
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <FaChevronUp size={10} />;
    return <FaChevronDown size={10} />;
  };

  render() {
    return (
      <thead>
        <tr className="table100-head">
          {this.props.columns.map((column, index) => (
            <th
              className={`column${index + 1}`}
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
