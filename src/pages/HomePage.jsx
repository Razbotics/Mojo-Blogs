import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserTable from "../components/UserTable";
import { getUsers } from "../services/userService";
import _ from "lodash";
import "./HomePage.css";

function HomePage() {
  const [users, setUsers] = useState([]);
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });

  const getUsersData = async (column) => {
    try {
      setSortColumn(column);
      const userData = await getUsers();
      const users = userData.data;
      const sorted = _.orderBy(users, [sortColumn.path], [sortColumn.order]);
      setUsers(sorted);
    } catch (e) {
      toast.error("Error in fetching users");
    }
  };

  useEffect(() => {
    getUsersData(sortColumn);
  }, [sortColumn.path, sortColumn.order]);

  return (
    <>
      <input className="Search" placeholder="Select column to search by..." />
      <UserTable users={users} onSort={getUsersData} sortColumn={sortColumn} />
    </>
  );
}

export default HomePage;
