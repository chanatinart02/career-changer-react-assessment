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

  const removeEmployee = (index) => {
    setEmployee((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <>
      <h3>Create user here</h3>
      <div className="center">
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
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
      <div className="center">
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
            {employee.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.position}</td>
                  <td>
                    <button onClick={() => removeEmployee(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
