import './RecipeSteps.css';
import React from 'react';

function RecipeSteps(props) {
    const recipeStepsDetails = props.steps.map((steps, index) => {
        return (
            <li key={index} 
                className={ steps.completed ? 'completed' : '' } 
                onClick={ () => props.onClick(index) }>
                { steps.name }
            </li>
        );
    });

    return (
        <ol>
            { recipeStepsDetails }
        </ol>
    );
}

export default RecipeSteps;