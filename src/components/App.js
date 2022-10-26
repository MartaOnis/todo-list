import { useState, useEffect } from 'react';
import '../styles/App.scss';
import ls from '../services/local-storage';
import TaskForm from './TaskForm';
import TaskTable from './TaskTable';
import Theme from './Theme';
import { v4 as uuidv4 } from 'uuid';
// import { Link, Route, Routes } from 'react-router-dom';

function App() {
  const [input, setInput] = useState('');
  const [taskItems, setTaskItems] = useState(ls.get('taskItemsLS', []));
  const [theme, setTheme] = useState(ls.get('themeLS', 'light'));

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      const newTask = [
        { name: taskName, done: false, id: uuidv4() },
        ...taskItems,
      ];
      setTaskItems(newTask);
    }
  };
  const toggleTask = (item) => {
    setTaskItems(
      taskItems.map((task, index) =>
        task.name === item.name ? { ...task, done: !task.done } : task
      )
    );
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
  const handleClickBtn = (ev) => {
    ev.currentTarget.id === 'dark' ? setTheme('dark') : setTheme('light');
  };

  const removeTask = (id) => {
    const removeArr = [...taskItems].filter((todo) => todo.id !== id);
    setTaskItems(removeArr);
    // const removeArr = [...taskItems].filter(
    //   (task) => task.id === ev.currentTarget.id
    // );
    // setTaskItems.splice((removeArr.indexOf, 1));
    // console.log('holis');
    // console.log(removeArr.indexOf(ev.currentTarget.id));
  };

  useEffect(() => {
    ls.set('taskItemsLS', taskItems);
    ls.set('themeLS', theme);
  }, [taskItems, theme]);

  return (
    <div className={`body body__${theme}`}>
      <TaskForm
        input={input}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
      <TaskTable
        tasks={taskItems}
        toggleTask={toggleTask}
        title="Todo"
        removeTask={removeTask}
      />
      <TaskTable
        tasks={taskItems}
        toggleTask={toggleTask}
        title="Done"
        showCompleted={true}
        removeTask={removeTask}
      />
      <Theme handleClickBtn={handleClickBtn} />
    </div>
  );
}

export default App;
