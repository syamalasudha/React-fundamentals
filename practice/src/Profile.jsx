function Profile(){
    const name="Syamala"
    const age=19
    const isstudent=true
    return(
        <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>{isstudent===true?"I am a student":"I am not a student"}</p>
        </div>
    )
}
export default Profile;