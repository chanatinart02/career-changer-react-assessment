import React, { useState } from "react";

const Admin = ({ employee, setEmployee }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    setEmployee([
      ...employee,
      {
        name: name,
        lastname: lastname,
        position: position,
      },
    ]);
    clearInput();
  };

  const clearInput = () => {
    setName("");
    setLastname("");
    setPosition("");
  };

  return (
    <>
      <h3>Create user here</h3>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          value={lastname}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          value={position}
        />
        <button onClick={handleSave}>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => {
            return (
              <tr>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td>
                  <button>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
