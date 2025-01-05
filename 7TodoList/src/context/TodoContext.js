
import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos: [{
        id:1,
        todo : "Todo 1",
        completed:false
    }],
    addTodo: (todo) => {},
    updatedTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})



// Ye bs ek hook hai jo TodoContext ka use krta hai or TodoContext ka data return krta hai,
// isse hume TodoContext ke har ek Value ko use karne ke liye direct use kar sakte bs isse import karke 
export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

