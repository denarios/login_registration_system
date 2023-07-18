const UserData=({Users})=>{
    return(
        <>
        {
           Users.map((currUserData)=>{
            return(
                <tr>
                    <td>{currUserData.name}</td>
                    <td>{currUserData.description}</td>
                </tr>
            )
           })
        }
        </>
    )
}
export default UserData;