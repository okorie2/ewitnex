/** @jsxImportSource @emotion/react */

import React from "react";
import { Table, TableContainer } from "styles/components/table";

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
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th css = {{display: "flex", width: "125px"}}>
              <input type="checkbox" css ={{marginInline: "7%"}}/>
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
          {
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
          }
         
        </tbody>
      </Table>
    </TableContainer>
  )
};

export default TicketSalesTable;

const TableRow = (props:TableData) => {
  return (
  <tr>
  <td css = {{display: "flex"}}>
      <input type="checkbox" css ={{marginInline: "6%"}}/>
    {props.ticketID}
  </td>
  <td><p css = {{fontWeight: "bold", color: "black", marginTop: "1%" }}>{props.firstNames}</p> {props.lastName}</td>
  <td>{props.email}</td>
  <td>{props.date}</td>
  <td>{props.ticketType}</td>
  <td>N{props.price}</td>
  <td style={{
    color: props.status.startsWith("Att") ? "#3CD860" : "#FF3D3D"
  }}>{props.status}</td>
  <td>{props.location}</td>
</tr>
)
}