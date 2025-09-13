function ProductCard({Productname,Productprice,isavailable}){
    
    
    return (
        <div>
            <p>Productname:{Productname}</p>
            <p>Productprice:{Productprice}</p>
            <p>{isavailable===true?"In Stock":"Out of stock"}</p>
            
        </div>

    )
}
export default ProductCard;