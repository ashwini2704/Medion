import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
    Icon,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import {MdModeEditOutline} from "react-icons/md";

const initialState = {
  name: "",
  image: "",
  discount: "",
  price: 0,
  category: "",
};

export const EditProduct = () => {
  const { id } = useParams();
  const [data, setdata] = useState(initialState);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://ash-medicine-api.onrender.com/medicines/${id}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? +value : value;
    setdata((prev) => ({ ...prev, [name]: val }));
  };

  const handleUpdate = () => {
    axios
      .patch(`https://ash-medicine-api.onrender.com/medicines/${id}`, data)
      .then((res) => {
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
          navigate('/allprod');
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DIV>
        <div className="inputs">
                {updateSuccess && (
                    <div style={{height:"10px", marginBottom:"3px"}}>
                <Alert status="success">
                    <AlertIcon />
                    <AlertTitle>Product Successfully Updated</AlertTitle>
                </Alert></div>
                )}
            <div className="header">
                <div className="text">{id}</div>
                <div className="underline"></div>
            </div>
            <div className="input">
                <Icon className="Icon" as={MdModeEditOutline} />
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
            </div>
            <div className="input">
                <Icon className="Icon" as={MdModeEditOutline} />
                <input
                    type="text"
                    placeholder="image"
                    name="image"
                    value={data.image}
                    onChange={handleChange}
                />
            </div>
            <div className="input">
                <Icon className="Icon" as={MdModeEditOutline} />
                <input
                    type="number"
                    placeholder="Discount"
                    name="discount"
                    value={data.discount}
                    onChange={handleChange}
                />
            </div>
            <div className="input">
                <Icon className="Icon" as={MdModeEditOutline} />
                <input
                    type="number"
                    placeholder="price"
                    name="price"
                    value={data.price}
                    onChange={handleChange}
                />
            </div>
            <div className="input">
                <Icon className="Icon" as={MdModeEditOutline} />
                <select name="category" value={data.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Skin Care">Skin Care</option>
                    <option value="Baby Care">Baby Care</option>
                    <option value="Health">Health</option>
                    <option value="Nutrition">Nutrition</option>
                </select>
            </div>
            <button onClick={handleUpdate}>Update</button>
        </div>
        {/* <div>
          <img src="https://img.freepik.com/free-photo/scientist-woman-doctor-holding-glass-flask-analyzing-liquid-solution_482257-4093.jpg?size=626&ext=jpg&ga=GA1.1.367971166.1686936671&semt=sph" alt="" />
        </div> */}
    </DIV>
  );
};

const DIV = styled.div`
background-image: url("https://img.freepik.com/free-photo/top-view-medicine-clipboard-arrangement_23-2149341568.jpg?w=1060&t=st=1698958901~exp=1698959501~hmac=90e6a17443452ca831be4f0734cbc89f3e7d76976f6de22320be362f1c4e5bc5");
background-size: cover;
background-position: top;
  /* background: #e6e6e6; */
  height: 95vh;
  
  width: 100%;
    margin-top: 0px;
    padding: 5px 70px;

  .inputs {
    display: flex;
     flex-direction: column;
     position: absolute;
     right: 5%;
     /* margin:auto 50px; */
     height: 600px;
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
    margin-top: 10px;
   }
  input {
    border: 1px solid red;
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
    gap: 25px;
   }
   .input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 420px;
    height:60px;
    background: #d0cfcf;
    border-radius: 6px;
    color: #272626;
   }
   .input input {
    height: 50px;
    width: 400px;
    background: transparent;
    border: none;
    outline: none;
    color: #383636;
    font-size: 19px;   
   }
   .input select {
    height: 50px;
    width: 400px;
    background: transparent;
    border: none;
    outline: none;
    color: #413d3d;
    font-size: 19px;   
   }

   .input .Icon {
    margin:0px 25px;
    font-size: 30px;
    font-weight: 700;
    color: gray;
   }
   button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin-left: 40px;
    height:59px;
    color: #fff;
    background: #2884da;
    border-radius: 50px;
    font-size: 20px;
    font-weight:600;
    cursor: pointer;
   }
`;

export default EditProduct;
