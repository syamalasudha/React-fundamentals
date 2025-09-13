import "./App.css"
import { useState } from "react"
function App(){
  const [count,setCount]=useState(0)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleEmail=(event)=>{
    setEmail(event.target.value)

  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)

  }
  // const handleIncrement=()=>{
  //   //set(count+1)
  //   setCount((prevCount)=>prevCount+1)
  //   console.log(count)
  // }
   //const handleClick=(name)=>{
    // console.log("You clicked the button")
  // alert("Hello" +name)
    // alert(`Hello ${name}`)
  // }
  const handleChange=(event)=>{
    // console.log(event.target.name)
     //console.log(event.target.value)
setFormData({
 ...formData,
  [event.target.name]:event.target.value

})
   }
  const handleSubmit=(event)=>{
     event.preventDefault();
     alert(`Email:${formData.email}\nPassword:${formData.password}\nYou are Logged in!!`)
  }
  const [formData,setFormData]=useState(
    {
      email:"",
      password:""
    }
  )
  return (
    <div>{/*
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      {/{ <p>I am  a Button</p>
      <input type="text" name="myName" placeholder="Type your name" onChange={handleChange}/>
      <button onClick={()=>handleClick("Syamala")}>Click me</button>
}*/
<form onSubmit={handleSubmit}>
<input type="text" name="email" placeholder="Enter your email" onChange={handleChange} />
<input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
<button type="Submit">Login</button>
</form> }
    </div> 
  )
}
export default App;