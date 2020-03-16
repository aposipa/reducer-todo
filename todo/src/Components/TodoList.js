import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    // console.log(props.state.currentTodos)
    return(
        <div className="todo-list">
            {props.state.currentTodos.map(item => (
                <Todo
                key={item.id}
                item={item}
                dispatch={props.dispatch}
                currentTodos={props.state.currentTodos}
                />
            ))}
        </div>
    )
}

export default TodoList