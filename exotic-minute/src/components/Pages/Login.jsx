import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthRedux/action";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";


export const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { isAuth, isError, errorMessage } = useSelector(store => {
        return {
            isAuth : store.authReducer.isAuth,
            isError : store.authReducer.isError,
            errorMessage : store.authReducer.errorMessage
        }
    }, shallowEqual)

   const handlelogin = () => {
    let userData = {
        email,
        password
    }

    console.log(userData);
    setEmail("");
    setPassword("");
    
    dispatch(login(userData)).then(() => {
      navigate(location.state, { replace : true })
    })
    // dispatch(login(userData)).then(() => {
    //   navigate(location.state, { replace : true })
    // })

   }


    return (
        <DIV auth={isAuth.toString()} isError={isError.toString()}>
            <h1>{isAuth ? "Login Successful !!!" : "Login to continue"}</h1>
            <h3>{isError && errorMessage}</h3>
        <input 
            type="email" 
            name="email" 
            value={email} 
            placeholder="Email" 
            onChange={(e)=>setEmail(e.target.value)} 
        />
        <input 
            type="password" 
            name="password" 
            value={password} 
            placeholder="Password" 
            onChange={(e)=>setPassword(e.target.value)} 
        />
        <button onClick={handlelogin}>Login</button>
        </DIV>
    )
}

const DIV = styled.div`
  width:400px ;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    height: 40px;
    font-size: larger;
    border: ${({isError}) => (isError === "true" ? "1px solid red" : "1px solid grey")};
  }
  button {
    height: 35px;
    border: none;
  }

  h1{
    color: ${({auth}) => (auth === "true" ? "green" : "red")};
  }
  h3{
    color: red;
  }
`;