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

  const handleUserBtn = () => {
    setSector("user");
  };
  const handleAdminBtn = () => {
    setSector("admin");
  };

  return (
    <Layout>
      <h1>
        Generation Thailand <br /> Rect - Assessment
      </h1>
      <button onClick={handleUserBtn}>User Home Sector</button>
      <button onClick={handleAdminBtn}>Admin Home Sector</button>
      {sector === "user" ? <User employees={employee} /> : <Admin />}
    </Layout>
  );
};

export default Home;
