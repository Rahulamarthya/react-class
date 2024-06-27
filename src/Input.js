import React , {useState}from 'react'

export default function Input() {
    const[userName,setUserName]=useState('')
    function submit(){
        console.log("This is from submit function",userName)
    }
    function handleChange(e){
        // console.log(e.target.value)
        setUserName(e.target.value)
    }
  return (
    <div>
        <p>
        <input onChange={handleChange} placeholder='Enter username'/>
        <button onClick={submit}>Submit</button>
        </p>
    </div>
  )
}
