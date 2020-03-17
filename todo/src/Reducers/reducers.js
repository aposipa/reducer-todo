
export const initialState = {
    currentTodos: [
        {
            item: 'Learn about reducers',
            completed: false,
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

export const reducer = (state = initialState, action) => {
    console.log("This is the action:", action);
    switch(action.type) {
        case 'ADD_TODO':
        const newTodo = {
            item: action.payload,
            completed: false,
            id: new Date()
        }
            return {
                ...state,
                currentTodos: [...state.currentTodos, newTodo]
            };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                currentTodos: state.currentTodos.map(item => {
                    if(item.id === action.payload) {
                    return {...item, 
                    completed: !item.completed
                    };
                } else {
                    return item;
                }
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                currentTodos: state.currentTodos.filter(item => !item.completed)
            }
            default:
                return state;
    }
}