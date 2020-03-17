import React from "react";


const Todo = (props) => {

    let todoListItem = "item";
    if (props.item.completed) {
        todoListItem += "Completed";
    }

    const handleClick = () =>
        props.dispatch({type: "TOGGLE_COMPLETED", payload: props.item.id})

    return (
        <div key={props.item.id} className={`item${props.item.completed ? ' completed' : ''}`} onClick={handleClick}>
            {props.item.item}
        </div>
    );
};

export default Todo

