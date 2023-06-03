/** @jsxImportSource @emotion/react */

import React from "react";
import { Table, TableContainer } from "styles/components/table";

const TicketSalesTable = () => {
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
            <th>Amount</th>
            <th>Status</th>
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

export default TicketSalesTable;

const TableRow = () => {
  return (
  <tr>
  <td><input type="checkbox"/></td>
  <td>#000123456</td>
  <td><p css = {{fontWeight: "bold"}}>Franca Benibo</p> Raiya</td>
  <td>francabenino@gmail.com</td>
  <td>20.24.22, 09:21 AM</td>
  <td>Table for 5</td>
  <td>N100,000</td>
  <td>Attending</td>
  <td>Abuja</td>
</tr>
)
}