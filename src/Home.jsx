import React from "react";
import { useState } from "react";
import Layout from "./Layout";
import User from "./User";
import Admin from "./Admin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [employee, setEmployee] = useState(mockEmployees);
  const [sector, setSector] = useState();
  const [text, setText] = useState(
    <h1>
      Generation Thailand <br /> Rect - Assessment
    </h1>
  );

  const handleUserBtn = () => {
    setSector("user");
    setText(
      <h1>
        Generation Thailand <br /> Home - User Sector
      </h1>
    );
  };
  const handleAdminBtn = () => {
    setSector("admin");
    setText(
      <h1>
        Generation Thailand <br /> Home - Admin Sector
      </h1>
    );
  };

  return (
    <Layout>
      {text}
      <div className="center">
        <button className="modeBtn" onClick={handleUserBtn}>
          User Home Sector
        </button>
        <button className="modeBtn" onClick={handleAdminBtn}>
          Admin Home Sector
        </button>
      </div>
      {sector === "user" ? (
        <User employee={employee} />
      ) : sector === "admin" ? (
        <Admin employee={employee} setEmployee={setEmployee} />
      ) : (
        <div></div>
      )}
    </Layout>
  );
};

export default Home;
