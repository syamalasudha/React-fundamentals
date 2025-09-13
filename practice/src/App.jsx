import ProductCard from "./ProductCard.jsx"

function App() {
  const name = "Laptop"
  const price = 15000
  const isavailable = true
  return (
    <>
      <ProductCard Productname={name} Productprice={price} isavailable={isavailable} />
    </>
  )
}

export default App
