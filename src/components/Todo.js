import React, { Fragment } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { Draggable  } from 'react-beautiful-dnd';



const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>

          
        <div >
        <Draggable key={task.id} draggableId={'draggable'+ task.id} index={task.id}>
        {(provided, snapshot) => (
            <FontAwesomeIcon icon={faGripLines} 
            {...provided.dragHandleProps}  /> 
        )}
            
        </Draggable>      
        </div>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed? 'completed': ""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
        </div>
      
       
      
    </div>
  )
}

export default Todo
