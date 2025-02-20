import React from 'react'
import {notFound} from 'next/navigation'

const ReviewsPage = ({params}:{params:{productsId:string, reviews: string }}) => {
 if (parseInt(params.reviews)> 100){
    return notFound() ;
 }
  return (
    <div>ReviewsID {params.reviews} ProductsID {params.productsId} </div>
  )
}

export default ReviewsPage