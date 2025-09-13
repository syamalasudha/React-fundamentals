import "./colouring.css"
function UserAvatar(User) {
    

    
    return (
        <div className="details">
            <img src="images.jpg" alt="girl" />
            <div className="content">
                <p className="name">{User.Name}</p>
                <p>Course:{User.course}</p>
                <p>RollNo:{User.RollNo}</p>
                <p>BloodGroup:{User.bloodgroup}</p>
                <p>DOB:{User.DOB}</p>
            </div>
        </div>
    )
}
export default UserAvatar;