import React, { useState } from 'react';
import { v1 } from 'uuid';

import { Todolist } from './Todolist';

import { IFilter } from './models/types';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ]);
  const [filter, setFilter] = useState<keyof IFilter>('all');

  const removeTask = (id: string) => {
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

  const addTask = (title: string) => {
    const newTask = { id: v1(), title, isDone: false };
    setTasks([newTask, ...tasks]);
  };

  return (
    <div className='App'>
      <Todolist
        title='What to learn?'
        tasks={tasks4Todo}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
