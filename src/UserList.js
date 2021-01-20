import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";

export default function UserList() {
  const [userList, setUserList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(
    () =>
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setIsLoaded(true);
        setUserList(res.data);
      }),
    [userList, isLoaded]
  );

  const tableContainer = {
    width: "90%",
    margin: "auto",
  };

  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-start m-3">
        <span
          className="spinner-border spinner-border-lg"
          role="status"
          aria-hidden="true"
        ></span>
        &emsp; Loading...
      </div>
    );
  }
  return (
    <TableContainer className=" mt-5" component={Paper} style={tableContainer}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user, id) => (
            <UserItem key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
