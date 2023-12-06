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
import { store } from "../components/Redux/AuthRedux/store";
import { login } from "../components/Redux/AuthRedux/action";

const initialState = {
    firstname:"",
    lastname:"",
    mobile:"",
    address:"",
    email: "",
    password:""
}

export const Login = () => {
   const [action, setAction] =useState("Login");
   const [data, setData] = useState(initialState);
   const [users, setUsers] = useState([]);
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const navigate = useNavigate();
   const location = useLocation();
   const [showError, setShowError] = useState(false);
   const [showSuccess, setShowSuccess] = useState(false);
   const { dispatch } = store;

   const handleSignup = () =>{
        axios
        .post("https://ash-medicine-api.onrender.com/user", data)
        .then((res) => {
            console.log(res);
            setData(initialState)
        })
        .catch((err) => {
            console.log(err)
        });
   }

   const handleLogin = () => {
    if(email === "admin@admin.com" && password==="admin") {
        navigate("/admin");
        dispatch(login());
    }
    let flag = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        flag = true;
        break;
      }
    }
    if (flag === true) {
      console.log("Login Successful");
      setShowSuccess(true);
      dispatch(login());
      setTimeout(() => {
        setShowSuccess(false);
        navigate(location.state, { replace: true });
      }, 4000); 
    } else {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 4000); 
    }

    setEmail("");
    setPassword("")
  };
  

   const handleChange = (e) => {
    const {name, value} = e.target;
    setData(prev => {
        return {...prev, [name] : value}
    })
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
      <DIV action={action}>
        <div className="alert">
        {showSuccess && (
        <Alert status="success">
            <AlertIcon />
            <AlertTitle>Login Successful</AlertTitle>
        </Alert>
        )}

        {showError && (
        <Alert status="error">
            <AlertIcon />
            <AlertTitle>Wrong Credentials!</AlertTitle>
        </Alert>
        )}
        </div>
        <div className="login-box">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {
                    action === "Login" ? <div></div> : 
                    <div className="signup-wrap">
                      <div className="input-name">
                        <div className="name">
                            <Icon className="Icon" as={MdGroup} />
                            <input type="text" name="firstname" value={data.firstname} placeholder="Firstname" onChange={handleChange} />
                        </div>
                        <div className="name">
                            <Icon className="Icon" as={MdGroup} />
                            <input type="text" name="lastname" value={data.lastname} placeholder="Lastname" onChange={handleChange} />
                        </div>
                      </div>
                        <div className="signup-input">
                            <Icon className="Icon" as={MdGroup} />
                            <input type="text" name="mobile" value={data.mobile} placeholder="Mobile Number" onChange={handleChange} />
                        </div>
                        <div className="signup-input">
                            <Icon className="Icon" as={MdGroup} />
                            <input type="text" name="address" value={data.address} placeholder="Address" onChange={handleChange} />
                        </div>
                    </div>
                        

                }
               <div className="input">
                    <Icon className="Icon" as={MdEmail} />
                    <input
                        type="email"
                        name="email"
                        value={action === "Login" ? email : data.email}
                        placeholder="Email"
                        onChange={(e) => {
                        if (action === "Login") {
                            setEmail(e.target.value);
                        } else {
                            handleChange(e);
                        }
                        }}
                    />
                </div>
                <div className="input">
                    <Icon className="Icon" as={MdLock} />
                    <input
                        type="password"
                        name="password"
                        value={action === "Login" ? password : data.password}
                        placeholder="Password"
                        onChange={(e) => {
                        if (action === "Login") {
                            setPassword(e.target.value);
                        } else {
                            handleChange(e);
                        }
                        }}
                    />
                </div>

            </div>
            {action === "Sign Up" ? <div></div> : 
            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            }
            <div className="submit-container">
                {
                    action === "Login" ? <div><div className="submit" onClick={handleLogin}>Login</div><br/><span className="link" onClick={()=>setAction("Sign Up")}>New User?</span></div> :
                    <div><div className="submit" onClick={handleSignup}>Sign up</div><br/><span className="link" onClick={()=>setAction("Login")}>Already Registered</span></div>
                }
                
            </div>          
        </div>
        <div className="medion">Medion</div>
    </DIV>
    )
}

const DIV = styled.div`
    background-image:url("https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?size=626&ext=jpg&ga=GA1.1.367971166.1686936671&semt=sph");
    background-position:top;
    background-size: cover;
    width: 100%;
    margin-top: 0px;
    padding: 70px;

    .alert {
        width: 250px;
        margin-bottom: 20px;
    }
    .medion {
        font-size: 100px;
        font-weight: 700;
        color: #5a9aae;
        position: absolute;
        right: 20%;
        top: 30%;
        /* text-decoration: underline; */
    }
   .login-box {
     display: flex;
     flex-direction: column;
     margin:auto 50px;
     height: 650px;
     /* margin-top:200px; */
     background: #fff;
     padding-bottom: 30px;
     max-width: 500px; 
     width: 100%;
     /* border: 2px solid black; */
     box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
     border-radius: 15px;

   }

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
    color: #474444;
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
    width: 250px;
    margin-left: 40px;
    height:59px;
    color: #fff;
    background: #1c262f;
    border-radius: 50px;
    font-size: 20px;
    font-weight:600;
    cursor: pointer;
    }
    .link {
        margin-top: 0px;
    color:#2884da;
    cursor:pointer;
    text-decoration: underline;
   }
    .gray {
        background: #c7c7c7;
        color: #494646;
    }
`