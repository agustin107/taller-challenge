import { Filter, Todo } from '@app/types';
import { useRef, useState } from 'react';

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>(Filter.All);
  const titleRef = useRef<HTMLInputElement>(null);

  const getTodoList = () => {
    const todoList = localStorage.getItem('todoList');

    if (todoList) {
      setTodoList(JSON.parse(todoList));
    } else {
      console.warn('No todo list found');
    }
  };

  const addTodo = () => {
    const title = titleRef.current?.value;

    if (!title) {
      console.warn('Title is required');

      return alert('Title is required');
    }

    const todo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    const updatedTodoList = [...todoList, todo];

    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
    titleRef.current!.value = '';
  };

  const toggleTodo = (id: string) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
  };

  const getFilteredTodos = (type: Filter) => {
    return todoList.filter((todo) => {
      if (type === 'all') {
        return true;
      }

      if (type === 'active') {
        return !todo.completed;
      }

      return todo.completed;
    });
  };

  const filterTodos = (type: Filter) => {
    return () => {
      setFilter(type);
    };
  };

  return {
    todoList,
    filter,
    titleRef,
    getTodoList,
    addTodo,
    toggleTodo,
    getFilteredTodos,
    filterTodos,
  };
};
