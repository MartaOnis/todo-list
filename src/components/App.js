import { useState, useEffect } from 'react';
import '../styles/App.scss';
import ls from '../services/local-storage';
import TaskForm from './TaskForm';
// import { Link, Route, Routes } from 'react-router-dom';

function App() {
  const [input, setInput] = useState('');
  const [taskItems, setTaskItems] = useState(ls.get('taskItemsLS', []));

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      const newTask = [{ name: taskName, done: false }, ...taskItems];
      setTaskItems(newTask);
    }
  };
  const handleInput = (ev) => {
    setInput(ev.currentTarget.value);
  };

  const handleSubmit = (ev) => {
    if (input !== '' && input.length < 180) {
      ev.preventDefault();
      createNewTask(input);
      setInput('');
    }
  };
  useEffect(() => {
    ls.set('taskItemsLS', taskItems);
  }, [taskItems]);

  return (
    <div className="">
      <TaskForm
        input={input}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
    </div>
  );
}

export default App;
