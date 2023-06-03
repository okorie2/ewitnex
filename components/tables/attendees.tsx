/** @jsxImportSource @emotion/react */

import Image from "next/image";
import React from "react";
import { Table, TableContainer } from "styles/components/table";

const AttendeesTable = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>
              <input type="checkbox"/>
            </th>
            <th>Ticket ID</th>
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
           <TableRow />
           <TableRow />
           <TableRow />
           <TableRow />
           <TableRow />
           <TableRow />
           <TableRow />
           <TableRow />
           <TableRow />
           <TableRow />
           </>
          }
         
        </tbody>
      </Table>
    </TableContainer>
  )
};

export default AttendeesTable;

const TableRow = () => {
  return (
  <tr>
  <td><input type="checkbox"/></td>
  <td>#000123456</td>
  <td>
    <div css = {{display: "flex" , gap: "2%"}}>
        <Image  src = "/assets/pngs/followers1.png" alt="" width={40} height={40}/>
        <div css ={{display: "flex", flexDirection: "column", gap: "2%", paddingTop: "1%"}}>
            <p css = {{fontWeight: "bold"}}>Franca Benibo</p> 
            <p>Raiya</p>
        </div>
    </div>
  </td>
  <td>francabenino@gmail.com</td>
  <td>20.24.22, 09:21 AM</td>
  <td>Table for 5</td>
  <td>Abuja</td>
</tr>
)
}