import "./Greeting.css"
import "./ProductCard.css"
function ProductCard(Product){
  const containerStyle={
        border: "2px solid black",
    paddingLeft: "4px",
    paddingRight: "4px"
    }
    return (
        <div style={containerStyle}>
            <p className="title">Productname:{Product.Productname}</p>
            <p className="price">Productprice:{Product.Productprice}</p>
           {Product.isavailable===true?<p className="available"> In stock</p>:<p className="notavailable">Out of stock</p>}
    
        
        </div>

    )
}
export default ProductCard;