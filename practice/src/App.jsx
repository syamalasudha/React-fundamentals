import UserAvatar from "./UserAvatar.jsx"
import ProductCard from "./ProductCard.jsx"
import "./app.css"
import BlogPost from "./BlogPost.jsx"
function App() {
  const name = "Y.SYAMALA SUDHA"
  const course = "B.Tech(CSE)"
  const RollNo = "24VV1A0563"
  const bloodgroup = "O+"
  const DOB = "12/08/2006"
  const products = [
    {
      ProductName: "Product1",
      ProductPrice: "3000",
      isavailable: true
    }, {
      ProductName: "Product2",
      ProductPrice: "6000",
      isavailable: true
    }, {
      ProductName: "Product3",
      ProductPrice: "9000",
      isavailable: true
    }, {
      ProductName: "Product4",
      ProductPrice: "12000",
      isavailable: true
    }
  ]
  const post=[
    { id:1,
      author:"Syamala",
      title:"Lion of Judah",
      description:"Fills fire inside"
    },{id:2,
      author:"Syamala",
      title:"Lion of Judah",
      description:"Fills fire inside"
    },{id:3,
      author:"Syamala",
      title:"Lion of Judah",
      description:"Fills fire inside"
    },{id:4,
      author:"Syamala",
      title:"Lion of Judah",
      description:"Fills fire inside"
    }
  ]


  return (
    <div className="maincontainer">

       { <ProductCard Productname="Laptop" Productprice="15000" isavailable={true} />
      { <ProductCard Productname="Laptop" Productprice="15000" isavailable={false} /> }
      <UserAvatar Name={name} course={course} RollNo={RollNo} bloodgroup={bloodgroup} DOB={DOB}/> 

      {/*
        products.map((products)=>(
           <ProductCard Productname={products.ProductName} Productprice={products.ProductPrice} isavailable={products.isavailable} />
        )
      )
      }   */}
      {/* {
        post.map((post)=>(
          <BlogPost  key={post.id} author={post.author} title={post.title} description={post.description}/>
        ))
      } */}



    </div>
  )
}

export default App
