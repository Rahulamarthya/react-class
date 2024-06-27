import React from 'react'
import './Vehicles.css'

export default function DiplayVehicles(props) {
  return (
    <div className='vehicle-parent'>
        {
      props.myVehicles.map((vehicles)=>(
        <div className='vehicle'>
            <p><b>Name:</b> {vehicles.name}</p>
            <p><b>Price:</b>{vehicles.price}</p>
            <p><b>Description:</b> {vehicles.description}</p>
            <img src={vehicles.image} alt ={vehicles.name}width="55%"/>
        </div>
      ))
    }
    </div>
  )
}
