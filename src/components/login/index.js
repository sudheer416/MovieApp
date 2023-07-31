import React,{useState,useRef} from 'react'

import "./index.css"
import { Form } from 'react-router-dom'

const LoginForm = () => {
const [error,setError]=useState(false)
const userName=useRef("")
const password=useRef("")

const submitHandler= async(e)=>{
    try{
    e.preventDefault()

    //const userDetails={"username":userName.current.value,"password":password.current.value}
    const userDetails={
        "username":"rahul",
        "password":"rahul@2021"
    }

    console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(userDetails),
    }
    const response= await fetch(url,options)
    console.log("responsre",response.json())
    const data= await response.json()

    if (response.ok==true){
        
        console.log(data)
    }
    else{
        console.log("fetchoing error")
    }
    }
    catch(err){
        console.log("error:",err)
    }
    
   // setError(true)
}

 const renderUserNameField=()=>{
    return(
        <>
            <label>Username</label>
            <input  ref ={userName} type='text' />
        </>
    )
 }
 const renderPasswordField=()=>{
    return(
        <>
            <label>Password</label>
            <input ref={password}  type='password' />
        </>
    )
 }


  return (
    <div className='login-form-container'>
        <div className="form-container" >
        <h1 className='log-header'>Login</h1>
        <form onSubmit={submitHandler}>
            <div></div>
            <div className='inputlabel'>{renderUserNameField()}</div>
            <div className='inputlabel'>{renderPasswordField()}</div>
            <div>{error?<p>Username or Password is Invalid</p>:null}</div>
            <button type='submit' className='submit'>Login</button>
        </form>
        </div>


      
    </div>
  )
}

export default LoginForm
