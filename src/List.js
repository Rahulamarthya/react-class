import React, {useState} from 'react'

export default function List() {
  const[employees,setEmployees]=useState([
    {
        name:"Sravani",
        city:"Banswada",
        gender:"female",
        yop:"2022"
    },
    {
        name:"Neha",
        city:"Bangalore",
        gender:"female",
        yop:"2021"
    },
    {
        name:"Akhila",
        city:"hyderabad",
        gender:"female",
        yop:"2022"
    }
])
  return (
    <div>
      {
        employees.map((emp)=>(
          <div>
             <p>Name:{emp.name}</p>
             <p>City:{emp.city}</p>
             <p>Gender:{emp.gender}</p>
             <p>Year:{emp.yop}</p>
          </div>
        ))
      }

    </div>
  )
}
