import './index.css';
import React, { useEffect, useState } from 'react';
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import RecipeSteps from './RecipeSteps';

function App() {
    const initialRecipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        steps: [
            { name: 'Add cut potatoes to a pot of heavily salted water.', completed: true },
            { name: 'Bring pot to a boil.', completed: true },
            { name: 'Boil the potatoes until fork tender, about 15-20 minutes.', completed: false },
            { name: 'Strain the potatoes.', completed: false },
            { name: 'Return potatoes to pot.', completed: false },
            { name: 'Add butter, cream, salt, and pepper to taste.', completed: false },
            { name: 'Mash potatoes.', completed: false },
            { name: 'Reseason and add butter and cream as desired.', completed: false },
        ]
    };

    const [ recipe, setRecipe ] = useState(initialRecipe);

    const [ prepared, setPrepared ] = useState(false);

    const [ completed, setCompleted ] = useState(false);

    function ingredientClick(index) {
        const updatedRecipe = { ... recipe };
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        setRecipe(updatedRecipe);
    }

    function stepClick(index) {
        const updatedRecipe = { ... recipe };
        updatedRecipe.steps[index].completed = !updatedRecipe.steps[index].completed;
        setRecipe(updatedRecipe);
    }

    useEffect(() => {
        setPrepared(recipe.ingredients.every(i => i.prepared));
    }, [recipe]);

    useEffect(() => {
        setCompleted(recipe.steps.every(i => i.completed));
    }, [recipe]);

    return (
        <article>
            <h1 className='title'>Recipe Manager</h1>
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />
            <h3>Ingredient List</h3>
            <IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick } />
            { prepared ? <h3>Prep work done!</h3> : <h3>Just keep chopping!!</h3>}
            <h3>Recipe Steps</h3>
            <RecipeSteps steps={recipe.steps} onClick={ stepClick } />
            { completed ? <h3>Holy Cooked!</h3> : <h3>Just keep cooking Man!!</h3>}
        </article>
    )
}

export default App;