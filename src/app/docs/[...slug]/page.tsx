import React from 'react'

const SlugPage = ({params}: {params: {slug: string [] }} ) => {
  if (params.slug.length === 2) {
    return (
    <h1>Hashibub Alam {params.slug[0]} And Hacker {params.slug[1]}  </h1>
  )} else if (params.slug.length === 1) {
    return (
    <h1>Salman Vai {params.slug[0]}  </h1>
  )
  }
  return (
    <div>SlugPage {params.slug} </div>
  )
}

export default SlugPage