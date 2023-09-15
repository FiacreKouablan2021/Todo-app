import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';

uuidv4();

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodoWrapper'>
        <DragDropContext onDragEnd={(... props) => {console.log(props)}}>
        <h1>Get things done!</h1>
        
        <Droppable droppableId="droppable-1">
            {(provided, _) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                        <TodoForm addTodo = {addTodo}/>
      {todos.map((todo, index) => (

        todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo}/>):(
        <Draggable key={todo.id} draggableId={'draggable'+ todo.id} index={index}>
            {(provided, snapshot) => (
                <Todo ref={provided.innerRef} 
                {...provided.draggableProps}
                {...provided.dragHandleProps} 
                task={todo} key={index}
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo}
                editTodo={editTodo} />
            )}
        </Draggable>
        )
      ))}
                </div>
            )}
        </Droppable>

      

      </DragDropContext>
    </div>
  )
}

export default TodoWrapper
