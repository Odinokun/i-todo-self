// single task
export interface ITask {
  id: string;
  title: string;
  isDone: boolean;
}
// Todo list component
export interface ITodoAll {
  title: string;
  tasks: ITask[];
  removeTask: (id: string) => void;
  changeFilter: (value: keyof IFilter) => void;
  addTask: (title: string) => void;
}

// Filter
export interface IFilter {
  all: string;
  active: string;
  completed: string;
}
