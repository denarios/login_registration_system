import { Link } from "react-router-dom";
const UserData=({Users})=>{
    return(
        <>
        {
           Users.map((currUserData)=>{
            return(
                <tr>
                    <td>{currUserData.name}</td>
                    <Link to={`/problem/${currUserData._id}`} className="link">
                    <span className="postTitle">{currUserData._id}</span>
                    </Link>
                </tr>
            )
           })
        }
        </>
    )
}
export default UserData;