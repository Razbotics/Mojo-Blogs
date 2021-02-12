import React, { useEffect, useState } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import UserTable from "../components/UserTable";
import { getUsers } from "../services/userService";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

function HomePage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFiltersUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });

  const handleSort = async (column) => {
    try {
      setSortColumn(column);
      const sorted = _.orderBy(users, [sortColumn.path], [sortColumn.order]);
      setFiltersUsers(sorted);
    } catch (e) {
      toast.error("Error in fetching users");
    }
  };

  const handleSearch = async (value) => {
    setFiltersUsers(users);
    if (!value) return;

    const filtersUsers = users.filter((user) => {
      if (sortColumn.path === "company.name")
        return user.company.name.includes(value);
      return user[sortColumn.path].includes(value);
    });
    setFiltersUsers(filtersUsers);
  };

  useEffect(async () => {
    try {
      setLoading(true);
      const userData = await getUsers();
      const users = userData.data;
      setUsers(users);
      setFiltersUsers(users);
      setLoading(false);
    } catch (e) {
      toast.error("Error in fetching Users");
      setUsers([]);
      setFiltersUsers([]);
      setLoading(false);
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <SearchBar
        placeholder="Select column to search by"
        onSearch={handleSearch}
      />
      <UserTable
        users={filteredUsers}
        onSort={handleSort}
        sortColumn={sortColumn}
      />
    </>
  );
}

export default HomePage;
