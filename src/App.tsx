import React, { useState } from 'react';
import { v1 } from 'uuid';

import { Todolist } from './Todolist';

import { IFilter } from './models/types';

function App() {
  const [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ]);
  const [filterVal, setFilterVal] = useState<keyof IFilter>('all');

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  let tasks4Todo = tasks;
  if (filterVal === 'active') {
    tasks4Todo = tasks.filter(task => !task.isDone);
  } else if (filterVal === 'completed') {
    tasks4Todo = tasks.filter(task => task.isDone);
  }
  const changeFilter = (value: keyof IFilter) => {
    setFilterVal(value);
    console.log(value);
  };

  const addTask = (title: string) => {
    if (title.trim() !== '') {
      const newTask = { id: v1(), title: title.trim(), isDone: false };
      setTasks([newTask, ...tasks]);
    }
  };

  const changeStatus = (id: string, isDone: boolean) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, isDone } : task)));
  };

  return (
    <div className='App'>
      <Todolist
        title='What to learn?'
        tasks={tasks4Todo}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeStatus={changeStatus}
        filterVal={filterVal}
      />
    </div>
  );
}

export default App;
