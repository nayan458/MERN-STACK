import React from 'react'
import RecipeReviewCard from "./RecipeReviewCard"
import Flexdiv from './Flexdiv'
import Shoe from './Shoe'



import './index.css'

const App=()=>{
  return(<>
  <Flexdiv>
  </Flexdiv>
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
    <Shoe ></Shoe>
  </>)
}

export default App;