import { Metadata } from 'next'

type Prpos = {
  params: { productsId: string }
} 

export const generateMetadata = async ({params}: Prpos) : Promise<Metadata> => {
  const title = await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`iphone ${ params.productsId  } `)
    }, 100)
  })
 return { title: `Product ${title} ` }

}



const ProductsId = ({params}: Prpos ) => {
  return (
    <h1>ProductsId {params.productsId} </h1>
  )
}

export default ProductsId