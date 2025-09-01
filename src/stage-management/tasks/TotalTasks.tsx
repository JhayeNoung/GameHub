import { useContext } from 'react';
import TasksContext from './tasksContext';

function TotalTasks() {
  const { tasks } = useContext(TasksContext);

  return (
    <div>{tasks.length}</div>
  )
}

export default TotalTasks;