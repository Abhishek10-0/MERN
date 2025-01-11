
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


function Todo() {
    const todos = useSelector(state => state.todo)

    const dispatch = useDispatch()

  return (
    <>
    <div>
        <h1>Todo List</h1>
        <ul>
            {todos.map((todo)=>
            
            <li key = {todo.id}>
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </li>
            )}
        </ul>
    </div>
    </>
  )
}

export default Todo