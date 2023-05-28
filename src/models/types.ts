// single task
export interface ITask {
  id: number;
  title: string;
  isDone: boolean;
}
// Todo list component
export interface ITodoAll {
  title: string;
  tasks: ITask[];
  removeTask: (id: number) => void;
  changeFilter: (value: keyof IFilter) => void;
}

// Filter
export interface IFilter {
  all: string;
  active: string;
  completed: string;
}
