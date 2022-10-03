import { useSelector } from 'react-redux';

export default function TasksHeader() {

  // i import 'todo' slice from my redux file
  const tasks = useSelector(state => state.todo);
  const undoneTasks = tasks.filter((t) => t.done === false);
  
  return (
    <header>
      <h1>React Todo List</h1>
      <p>task(s) to do: <strong>{undoneTasks.length}</strong></p>
    </header>
  );

};

