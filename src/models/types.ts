// Filter
export interface IFilter {
  all: string;
  active: string;
  completed: string;
}

// single todo
export interface ITodo {
  id: string;
  title: string;
  filterVal: keyof IFilter;
}

// single task
export interface ITask {
  id: string;
  title: string;
  isDone: boolean;
}

// tasks object
export interface ITasks {
  [key: string]: ITask[];
}

// Todolist main component
export interface ITodoAll {
  todoId: string;
  title: string;
  tasks: ITask[];
  removeTask: (todoId: string, taskId: string) => void;
  changeFilter: (todoId: string, value: keyof IFilter) => void;
  addTask: (todoId: string, title: string) => void;
  changeStatus: (todoId: string, taskId: string, isDone: boolean) => void;
  removeTodo: (todoId: string) => void;
  filterVal: keyof IFilter;
}
