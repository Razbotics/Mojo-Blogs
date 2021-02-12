import React from "react";
import Table from "../common/table";
import { useHistory } from "react-router-dom";
import "./UserTable.css";

function UserTable({ users, onSort, sortColumn }) {
  const history = useHistory();
  const columns = [
    { path: "name", label: "Name" },
    { path: "company.name", label: "Company" },
    { path: "website", label: "Website" },
  ];

  const onUserClick = (userId) => {
    history.push(`/posts/${userId}`);
  };

  return (
    <div className="wrap-table100">
      <div className="table100">
        <Table
          data={users}
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
          onUserClick={onUserClick}
        />
      </div>
    </div>
  );
}

export default UserTable;
