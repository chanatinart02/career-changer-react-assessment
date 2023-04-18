import React, { useState } from "react";

const User = ({ employees }) => {
  const showEmployee = employees.map((employee) => {
    return (
      <tr>
        <td>{employee.name}</td>
        <td>{employee.lastname}</td>
        <td>{employee.position}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{showEmployee}</tbody>
      </table>
    </>
  );
};

export default User;
