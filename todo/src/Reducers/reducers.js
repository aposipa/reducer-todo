
export const initialState = {
    currentTodos: [
        {
            item: 'Learn about reducers',
            completed: true,
            id: 1
        },
        {
            item: 'Get confused about reducers',
            completed: false,
            id: 2
        },
        {
            item: 'Cry about reducers',
            completed: false,
            id: 3
        }
    ]
}

export const reducer = (state, action) => {
    console.log("This is the action:", action);
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: state.currentTodos.map(item => {
                    if (item.id === action.payload) {
                        return {...item, completed: !item.completed}
                    } else {
                        return item;
                    }
                })
            };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                completed: !state.completed,
                item: state.item,
                id: new Date()
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(item => !item.completed)
            }
            default:
                return state;
    }
}