import React from "react"
import { useState } from "react"
import Layout from "./Layout"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
const [employee, setEmployee] = useState()
const [sector, setSector] = useState()

  return (
      <Layout>
        <h1>Generation Thailand <br /> Rect - Assessment</h1>
        <button>User Home Sector</button>
        <button>Admin Home Sector</button>
      </Layout>
  )
}



export default Home
