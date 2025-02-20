"use client"
import { useRouter } from "next/navigation";

const ProductPage = () => {

  const router = useRouter();

  const handleClick= () =>{
    console.log('Order Now')
    router.back()
  }
  return (
    <div>
        <h1>Order Products</h1>
        <button onClick={handleClick} >Order-Now</button>
    </div>
  )
}

export default ProductPage