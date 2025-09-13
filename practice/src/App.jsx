import UserAvatar from "./UserAvatar.jsx"
import ProductCard from "./ProductCard.jsx"
import "./app.css"
function App() {
  const name = "Y.SYAMALA SUDHA"
  const course="B.Tech(CSE)"
  const RollNo="24VV1A0563"
  const bloodgroup="O+"
  const DOB="12/08/2006"
  
  
  return (
    <div className="maincontainer">
      <ProductCard Productname="Laptop" Productprice="15000"  isavailable={true}/>
      <UserAvatar Name={name} course={course} RollNo={RollNo} bloodgroup={bloodgroup} DOB={DOB}/>
       <UserAvatar Name={name} course={course} RollNo={RollNo} bloodgroup={bloodgroup} DOB={DOB}/>
      
      
     
      
    </div>
  )
}

export default App
