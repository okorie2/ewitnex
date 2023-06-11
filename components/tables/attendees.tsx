/** @jsxImportSource @emotion/react */

import Image from "next/image";
import React from "react";
import { Table, TableContainer } from "styles/components/table";
import { TableData } from "./ticketSales";

const AttendeesTable = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
          <th css = {{display: "flex", width: "100px"}}>
              <input type="checkbox" css ={{marginInline: "7%"}}/>
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
            <>
           <TableRow
              ticketID="#000123456" 
              firstNames="Increase-Chris"
              lastName= "Alaede"
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
              lastName= "Alaede"
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
              lastName= "Alaede"
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
              lastName= "Alaede"
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
              lastName= "Alaede"
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
              lastName= "Alaede"
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
              lastName= "Alaede"
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
              lastName= "Alaede"
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
              lastName= "Alaede"
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
              lastName= "Alaede"
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

export default AttendeesTable;

const TableRow = (props:TableData) => {
  return (
  <tr>
  <td css = {{display: "flex"}}>
      <input type="checkbox" css ={{marginInline: "6%"}}/>
    {props.ticketID}
  </td>
  <td>
    <div css = {{display: "flex" , gap: "2%"}}>
        <Image  src = "/assets/pngs/followers1.png" alt="" width={40} height={40}/>
        <div css ={{display: "flex", flexDirection: "column", gap: "3%", paddingTop: "1%"}}>
            <p css = {{fontWeight: "bold", fontSize: "12px"}}>{props.firstNames}</p> 
            <p>{props.lastName}</p>
        </div>
    </div>
  </td>
  <td>{props.email}</td>
  <td>{props.date}</td>
  <td>{props.ticketType}</td>
  <td>{props.location}</td>
</tr>
)
}