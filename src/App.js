import { Provider } from 'react-redux';
import TaskForm from './TaskForm';
import TasksHeader from './TasksHeader';
import TasksList from './TasksList';
import { store } from './redux';

export default function App() {

  // old app after the redux slice creation

  // const [tasks, setTasks] = useState([
  //   { id: 1, text: 'Faire les courses', done: false },
  //   { id: 2, text: 'Ménage !', done: true }
  // ]);

  // const addTask = (text) => {
  //   const newTask = {
  //     text,
  //     id: Date.now(),
  //     done: false,
  //   };

  //   setTasks([...tasks, newTask]);
  // };

  // const deleteTask = (id) => {
  //   const filteredTasks = tasks.filter((t) => t.id !== id);
  //   setTasks(filteredTasks);
  // };

  // const toggleTask = (id) => {
  //   const realTask = tasks.find((t) => t.id === id);
  //   const index = tasks.findIndex((t) => t.id === id);
  //   const taskCopy = { ...realTask };
  //   const tasksListCopy = [...tasks];

  //   taskCopy.done = !taskCopy.done;
  //   tasksListCopy[index] = taskCopy;
  //   setTasks(tasksListCopy);
  // };

  // return (
  //   <div className='container'>
  //     <article>
  //       <TasksHeader tasks={tasks} />
  //       <TasksList
  //         tasks={tasks}
  //         toggleTask={toggleTask}
  //         deleteTask={deleteTask}
  //       />
  //       <footer>
  //         <TaskForm addTask={addTask} />
  //       </footer>
  //     </article>
  //   </div>
  // );

  // new app after the redux slice creation
  return (
    // i nedd to use '<Provider></Provider>' tags to use the redux slice
    <Provider store={store}>
      <div className='container'>
        <article>
          <TasksHeader />
          <TasksList />
          <footer>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );

}
