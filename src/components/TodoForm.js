import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if(value.length !== 0 ){
            addTodo(value)
        }
            setValue('')


    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' 
        value = {value} placeholder='What is the task today?' 
        onChange={(e) => setValue(e.target.value.trimStart())} required/>
        <button className='todo-btn' type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm
