const ADD_TODO = 'TODO/TODO/ADD_TODO';
const CHECK_TODO = 'TODO/TODO/CHECK_TODO';
const DELETE_TODO = 'TODO/TODO/DELETE_TODO';
const SEARCH_TODO = 'TODO/TODO/SEARCH_TODO';



export default function todo_reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
        var todos = state.todos || []
        todos = todos.concat([{
            "title": action.name,
            "check": action.check
        }])
        console.log(todos);
      return {
        ...state,
        "todos": todos 
      };
    case CHECK_TODO:    
        var todos = state.todos || []
        var temp = todos.findIndex((todo)=>todo.title === action.name)
        if(temp >= 0){
            console.log(todos[temp].check);
            todos[temp].check = !todos[temp].check
        }      
        return {
            ...state,
            todos: todos,
        }
    case DELETE_TODO:
        console.log(action.name)
        return {
            todos: state.todos.filter((todo)=>{
                return todo.title != action.name;
            })
        }
    case SEARCH_TODO: 
        console.log(...state.todos);
        var todos = [...state.todos]
        var filtered = todos.filter(todo=>{
            console.log(todo.title)
            return todo.title.includes(action.name)})

        return {
            ...state,
            todos: filtered,
            } 
    default:
      return state;
  }
}


export function addTodo(name, check) {    
    return {
        type: ADD_TODO,
        name,
        check
    };
}

export function chechTodo(name){
    return {
        type: CHECK_TODO,        
        name,
    }
}

export function deleteTodo(name){
    return {
        type: DELETE_TODO,
        name,        
    }
}
export function searchTodo(name){
    return {
        type: SEARCH_TODO,
        name,        
    }
}