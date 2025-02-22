import React from 'react'
import {notFound} from 'next/navigation'


function getRandomInt(count:number) {
  return Math.floor(Math.random()* count)
}

const ReviewsPage = ({params}:{params:{productsId:string, reviews: string }}) => {
 const random =  getRandomInt(2)
 if(random === 1){
  throw new Error ("This Page Is Not Found Hashibub")
 }
 if (parseInt(params.reviews)> 100){
    return notFound() ;
 }
  return (
    <div>ReviewsID {params.reviews} ProductsID {params.productsId} </div>
  )
}

export default ReviewsPage