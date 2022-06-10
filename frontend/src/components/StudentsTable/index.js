import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function StudentsTable({ students }) {
  const Headers = ["firstname", "lastname", "age", "email", "Actions"];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {Headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students?.map((student, index) => (
          <tr key={index}>
            <td>{student["firstname"]}</td>
            <td>{student["lastname"]}</td>
            <td>{student["age"]}</td>
            <td>{student["email"]}</td>
            <td>actions</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StudentsTable;
