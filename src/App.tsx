import React, { useState } from 'react';
import { v1 } from 'uuid';

import { Todolist } from './Todolist';

import { IFilter, ITasks, ITodo } from './models/types';

function App() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<ITodo[]>([
    { id: todolistID1, title: 'What to learn', filterVal: 'all' },
    { id: todolistID2, title: 'What to buy', filterVal: 'all' },
  ]);

  let [tasks, setTasks] = useState<ITasks>({
    [todolistID1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: 'Rest API', isDone: true },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
  });

  const removeTask = (todoId: string, taskId: string) => {
    setTasks({
      ...tasks,
      [todoId]: tasks[todoId].filter(task => task.id !== taskId),
    });
  };

  const changeFilter = (todoId: string, value: keyof IFilter) => {
    setTodolists(
      todolists.map(tl => (tl.id === todoId ? { ...tl, filterVal: value } : tl))
    );
  };

  const addTask = (todoId: string, title: string) => {
    if (title.trim() !== '') {
      const newTask = { id: v1(), title: title.trim(), isDone: false };
      setTasks({ ...tasks, [todoId]: [newTask, ...tasks[todoId]] });
    }
  };

  const changeStatus = (todoId: string, taskId: string, isDone: boolean) => {
    setTasks({
      ...tasks,
      [todoId]: tasks[todoId].map(task =>
        task.id === taskId ? { ...task, isDone } : task
      ),
    });
  };

  const removeTodo = (todoId: string) => {
    setTodolists(todolists.filter(tl => tl.id !== todoId));
    delete tasks[todoId];
  };

  return (
    <div className='App'>
      {todolists.map(tl => {
        let tasks4Todo = tasks[tl.id];
        if (tl.filterVal === 'active') {
          tasks4Todo = tasks[tl.id].filter(task => !task.isDone);
        } else if (tl.filterVal === 'completed') {
          tasks4Todo = tasks[tl.id].filter(task => task.isDone);
        }

        return (
          <Todolist
            key={tl.id}
            todoId={tl.id}
            title={tl.title}
            tasks={tasks4Todo}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeStatus={changeStatus}
            removeTodo={removeTodo}
            filterVal={tl.filterVal}
          />
        );
      })}
    </div>
  );
}

export default App;
