import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux';

export default function TaskForm() {

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTask(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='add a task' value={text} onChange={(e) => setText(e.target.value)} />
    </form>
  );

};

