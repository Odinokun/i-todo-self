import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { IFilter } from './models/types';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ]);
  const [filter, setFilter] = useState<keyof IFilter>('all');

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  let tasks4Todo = tasks;
  if (filter === 'active') {
    tasks4Todo = tasks.filter(task => !task.isDone);
  } else if (filter === 'completed') {
    tasks4Todo = tasks.filter(task => task.isDone);
  }

  const changeFilter = (value: keyof IFilter) => {
    setFilter(value);
  };

  return (
    <div className='App'>
      <Todolist title='What to learn?' tasks={tasks4Todo} removeTask={removeTask} changeFilter={changeFilter} />
    </div>
  );
}

export default App;
