import axios from "axios";
import { useEffect, useState } from "react"
import { UserCard } from "./UserCard";

export const Users = () => {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        axios.get("https://ash-medicine-api.onrender.com/user")
        .then((res) => {
            console.log("USERS", res.data);
            setUser(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((el,i) => (
                            <UserCard key={el.id} i={i} {...el} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}