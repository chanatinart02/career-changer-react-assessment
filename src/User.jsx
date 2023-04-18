import React from "react";

const User = ({ employee }) => {
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
        <tbody>
          {employee.map((employee) => {
            return (
              <tr>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default User;
