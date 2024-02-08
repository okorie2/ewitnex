/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { Table, TableContainer } from "styles/components/table";
import StyledCheckbox from "../inputs/StyledCheckbox";
import EmptyFolderState from "fragments/emptyFolderState";
import {  useMediaQuery } from "@mui/material";

export interface TableData {
  ticketID: string;
  firstNames: string;
  lastName: string;
  email: string;
  date: string;
  ticketType: string;
  price: string;
  status: string;
  location: string;
}

const TicketSalesTable = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };
  const isTablet = useMediaQuery("(max-width: 780px)");

  const [showData, setShowData] = useState(false);
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th css={{ display: "flex", width: "6rem", alignItems: "center" }}>
              <StyledCheckbox checked={checked} onChange={handleChange} />
              Ticket ID
            </th>
            <th>User</th>
            <th>Email</th>
            <th>Date</th>
            <th>Ticket Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {showData && (
            <>
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Attending"
                location="Abuja"
              />
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Refunded"
                location="Abuja"
              />
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Attending"
                location="Abuja"
              />
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Attending"
                location="Abuja"
              />
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Refunded"
                location="Abuja"
              />
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Attending"
                location="Abuja"
              />
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Attending"
                location="Abuja"
              />
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Attending"
                location="Abuja"
              />
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Attending"
                location="Abuja"
              />
              <TableRow
                ticketID="#000123456"
                firstNames="Increase-Chris"
                lastName="Alaede"
                email="increasechris124@gmail.com"
                date="20.24.22, 09:21 AM"
                ticketType="Table for 5"
                price="100,000"
                status="Attending"
                location="Abuja"
              />
            </>
          )}
        </tbody>
      </Table>
      {!showData && (
        <div css={{ marginTop: "2.5rem", marginLeft: isTablet ? "6vw":"6vw" }}>
          <EmptyFolderState>
            <div css = {{display:"flex", alignItems:"center", flexDirection:"column"}}>
              <p>No tickets have been sold yet.</p>
              <p>Share your event to get attendees</p>
            </div>
          </EmptyFolderState>
        </div>
      )}
    </TableContainer>
  );
};

export default TicketSalesTable;

const TableRow = (props: TableData) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };
  return (
    <tr>
      <td css={{ display: "flex", alignItems: "center" }}>
        <StyledCheckbox checked={checked} onChange={handleChange} />
        {props.ticketID}
      </td>
      <td>
        <p css={{ fontWeight: "bold", color: "black", marginTop: "1%" }}>
          {props.firstNames}
        </p>{" "}
        {props.lastName}
      </td>
      <td>{props.email}</td>
      <td>{props.date}</td>
      <td>{props.ticketType}</td>
      <td>N{props.price}</td>
      <td
        style={{
          color: props.status.startsWith("Att") ? "#3CD860" : "#FF3D3D",
        }}
      >
        {props.status}
      </td>
      <td>{props.location}</td>
    </tr>
  );
};
