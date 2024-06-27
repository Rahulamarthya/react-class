import React from 'react'

export default function Props(props) {
    console.log(props)
  return (
    <div>
      <h1>This is props component</h1>
      <p>Name is : <b>{props.studentName}</b> and Roll no is : {props.studentRollno}</p>

    </div>
  )
}
