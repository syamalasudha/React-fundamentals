function ProductCard(Product){
    return (
        <div>
            <p>Productname:{Product.Productname}</p>
            <p>Productprice:{Product.Productprice}</p>
            <p>{Product.isavailable===true?"In Stock":"Out of stock"}</p>
            
        </div>

    )
}
export default ProductCard;