import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext()

  if(loading){
    <Loading/>
  }
  if(cocktails.length < 1){
    <h2 className='section-title'>
      no match
    </h2>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>
        Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item)=>{
          return <Cocktail key={item.id}{...item}></Cocktail>
        })}
      </div>
    </section>
  )
}

export default CocktailList