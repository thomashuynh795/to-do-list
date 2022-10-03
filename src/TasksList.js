import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

export default function TasksList() {
  // to import my redux 'todo' slice i use a hook name 'useSelector' from the 'react-redux' librairy
  const tasks = useSelector(state => state.todo);
  return (
    <>
      {
        tasks.map(t => (
          <TaskItem task={t} key={t.id} />
        ))
      }
    </>
  );
};

