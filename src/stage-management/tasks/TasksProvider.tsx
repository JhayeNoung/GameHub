import { ReactNode, useReducer } from 'react';
import TasksContext from './tasksContext';

interface Props {
  children: ReactNode
}

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: 'ADD',
  task: Task
}

interface DeleteTask {
  type: 'DELETE',
  taskId: number,
}

export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [action.task, ...tasks]
    case 'DELETE':
      return tasks.filter(task => task.id !== action.taskId)
  }
}

function TasksProvider({ children }: Props) {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider