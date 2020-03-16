import React, { useState } from 'react';


const TodoForm = (props) => {
    
    const [newTodoItem, setNewTodoItem] = useState('');

    const handleChanges = event => {
        setNewTodoItem(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setNewTodoItem('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} type="text">
                <input 
                placeholder="add new to-do item"
                type="text"
                value={newTodoItem || ''}
                onChange={handleChanges}
                className="todo-input"
                />
                <button onClick={() => {props.dispatch({type: "ADD_TODO", payload: newTodoItem})}}>Add Item</button>
                <button onClick={() => {props.dispatch({type: "CLEAR_COMPLETED"})}}>Clear Completed</button>
            </form>
        </div>
    );
};

export default TodoForm;

// const handleSubmit = event => {
//     event.preventDefault();
//     this.props.addItem(this.state.item);
//     this.setState({
//         item: ''
//     });
// };

// return (
//     <form onSubmit={handleSubmit}>
//         <input
//         type="text"
//         name="item"
//         value={state.item}
//         onChange={handleChanges}
//         />
//         <button>Add Todo</button>
//     </form>
// )