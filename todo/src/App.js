import React, { useReducer } from 'react';
import { reducer, initialState } from './Reducers/reducers';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import '../src/Components/Todo.css';



function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <h1> My To-Do List</h1>
      <TodoList key={state.id} state={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  )
}

export default App;
