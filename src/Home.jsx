import React from "react"
import { useState } from "react"
import Navbar from "./Navbar"

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
    <div>
      <Navbar />
    </div>
  )
}



export default Home
