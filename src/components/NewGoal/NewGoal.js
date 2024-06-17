import React, { useState } from 'react';
import './NewGoal.css'

const NewGoal = (props) => {
    const [enteredText, setenteredText] = useState("");

    const addGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = {
            id : Math.random().toString(),
            text: enteredText
        }
        props.onAddGoal(newGoal);
        setenteredText("");
    }

    const textChangeHandler = (event) => {
        setenteredText(event.target.value);
        // enteredText = event.target.value;

    }

    return (
        <form  className='new-goal' onSubmit={addGoalHandler}>
            <input onChange = {textChangeHandler} value = {enteredText} type="text"></input>
            <button type="submit">Add Goal</button>
        </form>

    )
}
export default NewGoal;