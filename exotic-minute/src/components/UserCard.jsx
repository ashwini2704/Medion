export const UserCard = ({i,id,firstname,lastname,mobile,address,email,password}) => {
    return (
        <tr>
            <th>{i+1}</th>
            <th>{id}</th>
            <th>{firstname} {lastname}</th>
            <th>{email}</th>
            <th>{mobile}</th>
            <th>{address}</th>
        </tr>
    )
}
{/* <table>
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
                    
                </tbody>
            </table> */}