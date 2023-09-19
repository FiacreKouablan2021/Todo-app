import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id)
        setValue('')


    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value = {value} 
        placeholder='Update task' 
        onChange={(e) => setValue(e.target.value.trimStart())}/>
        <button className='todo-btn' type='submit'>Update Task</button>
    </form>
  )
}

export default EditTodoForm