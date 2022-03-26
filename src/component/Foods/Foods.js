import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    return (
        <div className='foods-container'>
            <div className="allFood">
                {
                    foods.map(food => <Food >{food}</Food>)
                }
            </div>
            <div className="order">
                <h1>Order list </h1>
            </div>
        </div>
    );
};

export default Foods;