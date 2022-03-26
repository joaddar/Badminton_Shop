import React from 'react';
import './Food.css'

const Food = (props) => {
    console.log(props);
    const { idMeal, strArea, strMealThumb, strCategory } = props.children;
    return (
        <div className='food'>
            <h3>{strCategory}</h3>
            <img style={{ width: '250px', height: '250px' }} src={strMealThumb} alt="" />
            <p>{idMeal}</p>
            <p>{strArea}</p>
            <button>Add to cart </button>
        </div>
    );
};

export default Food;