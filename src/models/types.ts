// single task
export interface ITask {
  id: number;
  title: string;
  isDone: boolean;
}
// all tasks
export interface ITodoAll {
  title: string;
  tasks: ITask[];
}
