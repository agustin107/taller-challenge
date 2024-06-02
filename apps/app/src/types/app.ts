export interface App {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}