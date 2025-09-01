import { TaskList, TasksProvider, TotalTasks } from "../stage-management/tasks";
import { AuthProvider, LoginInfo, LoginStatus } from "../stage-management/auth";
import Nav from "../stage-management/Nav";
import Counter from "../stage-management/counter/Counter";

function ReactQueryTest() {
  return (
    <div>
      <Nav />
      <Counter />
      <AuthProvider>
        <LoginInfo />
        <LoginStatus />
      </AuthProvider>
      <TasksProvider>
        <TotalTasks />
        <TaskList />
      </TasksProvider>
    </div>
  )
}

export default ReactQueryTest