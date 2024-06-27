import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  )
}

// import {useState} from 'react'
// import Props from './Props'
// import List from './List'
// import Input from './Input'
// import Vehicles from './Vehicles'
// import UserData from './UserData'

// function App(){
//   const [name,setName]=useState('React JS')
//   const [year,setYear]=useState(2013)
//   return(
//     <div>
//       <UserData/>
//       {/* <Input/> */}
//       {/* <List/> */}
//       {/* <Vehicles/> */}
//       {/* <h1>Welcome to Hyderbad</h1>
//       <p>Good Afternoon</p>
//       <p>Name:{name}  Year:{year}</p>
//       <Props studentName="Rahul Amarthya" studentRollno="1"/>
//       <Props studentName="Neha" studentRollno="2"/>
//       <Props studentName="Akhila" studentRollno="3"/> */}
//     </div>
//   )
// }

// export default App
