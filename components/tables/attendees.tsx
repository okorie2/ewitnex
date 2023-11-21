/** @jsxImportSource @emotion/react */

import Image from "next/image";
import React , { useState } from "react";
import { Table, TableContainer } from "styles/components/table";
import { TableData } from "./ticketSales";
import StyledCheckbox from "../inputs/StyledCheckbox";
import EmptyState from "fragments/emptyState";

const AttendeesTable = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };
  const [showData, setShowData] = useState(false)

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th css={{ display: "flex", width: "6rem", alignItems: "center" }}>
              {/* <input type="checkbox" css ={{marginInline: "9%"}}/> */}
              <StyledCheckbox
                checked={checked}
                onChange={handleChange}
              />
              Ticket ID
            </th>
            <th>User</th>
            <th>Email</th>
            <th>Date</th>
            <th>Ticket Type</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {
            showData && 
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
          }
        </tbody>
      </Table>
      {!showData && 
      <div css = {{marginTop:"2.5rem", marginLeft:"6vw"}}>
      <EmptyState>
        <p>This event does not have any attendees yet</p>
      </EmptyState>
      </div>}
    </TableContainer>
  );
};

export default AttendeesTable;

const TableRow = (props: TableData) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };
  return (
    <tr>
      <td css={{ display: "flex", alignItems: "center" }}>
        <StyledCheckbox 
          checked={checked}
          onChange={handleChange}
        />
        {props.ticketID}
      </td>
      <td>
        <div css={{ display: "flex", gap: "2%" }}>
          <Image
            src="/assets/pngs/followers1.png"
            alt=""
            width={40}
            height={40}
          />
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "3%",
              paddingTop: "1%",
            }}
          >
            <p css={{ fontWeight: "bold", fontSize: "12px" }}>
              {props.firstNames}
            </p>
            <p>{props.lastName}</p>
          </div>
        </div>
      </td>
      <td>{props.email}</td>
      <td>{props.date}</td>
      <td>{props.ticketType}</td>
      <td>{props.location}</td>
    </tr>
  );
};
