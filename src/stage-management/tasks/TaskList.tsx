import { useContext } from 'react';
import TasksContext from './tasksContext';

function TaskList() {
  const { tasks, tasksDispatch } = useContext(TasksContext);

  return (
    <div>
      <button
        onClick={() => tasksDispatch({ type: 'ADD', task: { id: Date.now(), title: "hello" } })}
        className='btn btn-primary'
      >Add</button>
      <ul className='list-group'>
        {tasks.map(task =>
          <li key={task.id} className='list-group-item d-flex justify-content-between'>
            {task.title}
            <button
              onClick={() => tasksDispatch({ type: 'DELETE', taskId: task.id })}
              className='btn btn-danger'
            >Delete</button>
          </li>)}
      </ul>
    </div>
  )
}

export default TaskList