import {MdGroup, MdEmail, MdLock} from "react-icons/md"
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import {
    Icon,
  } from '@chakra-ui/react'

const initialState = {
    firstname:"",
    lastname:"",
    mobile:"",
    address:"",
    email: "",
    password:""
}

export const Signup = () => {    
   const [data, setData] = useState(initialState);

   const handleSignup = () => {
    axios
    .post("https://ash-medicine-api.onrender.com/user", data)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
   }

   const handleChange = (e) => {
    const {name, value} = e.target;
    setData(prev => {
        return {...prev, [name] : value}
    })
   }

   return (
        <form onSubmit={handleSignup}>
            <div className="inputs">
                <div className="input-name">
                    <div className="name">
                        <Icon className="Icon" as={MdGroup} />
                        <input type="text" name="firstname" value={data.firstname} placeholder="Firstname" onChange={handleChange} required/>
                    </div>
                    <div className="name">
                        <Icon className="Icon" as={MdGroup} />
                        <input type="text" name="lastname" value={data.lastname} placeholder="Lastname" onChange={handleChange} required/>
                    </div>
                </div>
                <div className="input">
                    <Icon className="Icon" as={MdGroup} />
                    <input type="text" name="mobile" value={data.mobile} placeholder="Mobile Number" onChange={handleChange} required/>
                </div>
                <div className="input">
                    <Icon className="Icon" as={MdGroup} />
                    <input type="text" name="address" value={data.address} placeholder="Address" onChange={handleChange} required/>
                </div>
                <div className="input">
                    <Icon  className="Icon"as={MdEmail} />
                    <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} required/>
                </div>
                <div className="input">
                    <Icon className="Icon" as={MdLock} />
                    <input type="password" name="password"  placeholder="Password" value={data.password} onChange={handleChange} required/>
                </div>
            </div>
            <button type="submit">Submit</button>           
        </form>
   )
}