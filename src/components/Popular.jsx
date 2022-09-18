import React, { useEffect, useState } from 'react';
import './style.css'

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);
    const getPopular = async () => {
        const check = localStorage.getItem("popular");
        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4668d4e96ea04b7bb1277181973ab121&number=9`);
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes);
            console.log(data.recipes)
        }

    }
    return (
        <>
            <h3 className='heading'>Popular Recipe</h3>
            <div className="wrapper">
                {popular.map((recipe) => {
                    return (
                        <>
                            <div className="card">
                                <div className="card_img">
                                    <img src={recipe.image}></img>
                                </div>
                                <div className="card_text">
                                    <h3 className="title">{recipe.title}</h3>
                                    <h4 className="subtitle">{recipe.summary.slice(0, 50)} </h4>
                                    <h2 className="price">{recipe.pricePerServing}</h2>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    )
}




export default Popular;