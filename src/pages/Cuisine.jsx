import React, { useEffect, useState } from 'react';
import {Link,useParams} from 'react-router-dom';
import Footer from '../components/Footer';


function Cuisine() {
  const[cuisine,setCuisine]=useState([]);
  let params=useParams()
  const getCuisine=async (name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=eb33bc42b1d64597bef8b39dc93eed56&cuisine=${name}`)
        const recipes=await data.json();
        setCuisine(recipes.results)
      };
      useEffect(()=>{
        getCuisine(params.type);
        // console.log(params.type)
      },[params.type]);
  return (
    <>
       <div>
            <h3 style={{textAlign:"center",fontSize:"32px",color:"red"}}>{params.type}</h3>
            <div className='container'>
            {cuisine.map((item) => {
                return (
                    <div key={item.id} className="wrapper">
                        <div className='content'>
                            <img src={item.image} alt="recipe image"></img>
                            <p className='title'>{item.title}</p>
                        </div>
                    </div>

                );
            })}
            </div>
        </div>
        <Footer/>
        </>
    
  )
}

export default Cuisine