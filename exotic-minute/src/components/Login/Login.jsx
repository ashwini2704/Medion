import {MdGroup, MdEmail, MdLock} from "react-icons/md"
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    Icon,
    Alert,
    AlertIcon,
    AlertTitle,
  } from '@chakra-ui/react'
import { useNavigate, useLocation } from "react-router-dom";

const initialState = {
    firstname:"",
    lastname:"",
    mobile:"",
    address:"",
    email: "",
    password:""
}

export const Login = () => {
   const [users, setUsers] = useState([]);
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const navigate = useNavigate();
   const location = useLocation();
   

   const handleLogin = () => {
    let flag = false;
    for(let i=0; i<users.length; i++) {
        if(users[i].email === email && users[i].password === password) {
            flag = true;
            break;
        }
    }
    if(flag === true) {
        navigate(location.state, {replace: true})
    }else {
        <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Wrong Credentials!</AlertTitle>
      </Alert> 
    }
   }
   useEffect(() => {
    axios
    .get("https://ash-medicine-api.onrender.com/user")
    .then((res) => {
        console.log(res.data);
        setUsers(res.data);
    })
    .catch((err) => {
        console.log(err)
    })
   },[])


    return (
        <DIV>
        <form onSubmit={handleLogin}>
            <div className="inputs">
                <div className="input">
                    <Icon  className="Icon"as={MdEmail} />
                    <input type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="input">
                    <Icon className="Icon" as={MdLock} />
                    <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>       
                 <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>        
             </div>
             <button type="submit">Submit</button>
            <div className="forgot-password">New User? <span>Register Now</span></div>        

        </form>
        </DIV>
    )
}

const DIV = styled.div`
     
     /* border: 2px solid black; */
    

   .header {
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    width: 100%;
    margin-top: 30px;
   }
   .text {
    color:#2884da;
    font-size: 48px;
    font-weight: 700;
   }

   .underline {
    width:61px;
    height:6px;
    background:#2884da;
    border-radius:9px;
    
   }
   .inputs {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: ${({action}) => action==="Login" ? '25px' : '10px'};
   }

   .input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 420px;
    height: ${({action}) => action==="Login" ? '60px' : '50px'};
    background: #d0cfcf;
    border-radius: 6px;
    color: #272626;
   }

   .input .Icon {
    margin:0px 25px;
    font-size: 30px;
    font-weight: 700;
    color: gray;
   }
  
   .signup-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
   }

   .input-name {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 420px;
    height: 50px;
    /* background: #d0cfcf; */
    border-radius: 6px;
    gap: 10px;
   }

   .signup-input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 420px;
    height: 50px;
    background: #d0cfcf;
    border-radius: 6px;
    color: #272626;
   }

   .signup-input .Icon {
    margin:0px 25px;
    font-size: 30px;
    font-weight: 700;
    color: gray;
   }

   .input-name .name {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: auto; */
    height: 50px;
    background: #d0cfcf;
    border-radius: 6px;
    color: #272626;
   }

  .name input {
    width: 70%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    color: whitesmoke;
    font-size: 19px;  
   }
   .name .Icon {
    width: 30%;
    margin:0px 3px;
    font-size: 30px;
    font-weight: 700;
    color: gray;
   }
   .input input {
    height: 50px;
    width: 400px;
    background: transparent;
    border: none;
    outline: none;
    color: whitesmoke;
    font-size: 19px;   
   }

   .signup-input input {
    height: 50px;
    width: 400px;
    background: transparent;
    border: none;
    outline: none;
    color: whitesmoke;
    font-size: 19px;   
   }

   .forgot-password {
    text-align: left;
    padding-left: 62px;
    margin-top: 27px;
    color: #797979;
    font-size: 18px;
   }

   .forgot-password span {
    color:#2884da;
    cursor:pointer;
    text-decoration: underline;
   }

   .submit-container {
    display: flex;
    gap:30px;
    width: 70%;
    /* margin: 60px auto; */
    margin: ${({action}) => action==="Login" ? "60px auto 20px auto" : "30px auto"};
   }

   .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height:59px;
    color: #fff;
    background: #2884da;
    border-radius: 50px;
    font-size: 20px;
    font-weight:600;
    cursor: pointer;
    }
    .gray {
        background: #c7c7c7;
        color: #494646;
    }
`