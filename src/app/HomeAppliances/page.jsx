import React from 'react'

const HomeAppliances = () => {
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log);
  
  return (
    <div>HomeAppliances</div>
  )
}

export default HomeAppliances