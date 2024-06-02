import { AppContext, AppProvider } from '@app/contexts';
import { Filter } from '@app/types';
import { useEffect } from 'react';
import { TodoList } from './todo-list';
import { Button, Input } from '@taller-challenge/ui';
import { TodoFilters } from './todo-filters';
import { useTodo } from '@app/hooks';

export const TodoContainer = () => {
  const {
    addTodo,
    filter,
    filterTodos,
    getFilteredTodos,
    getTodoList,
    titleRef,
    todoList,
    toggleTodo,
  } = useTodo();

  useEffect(getTodoList, []);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Todo title"
          ref={titleRef}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              addTodo();
            }
          }}
        />
        <Button onClick={addTodo}>Add Todo</Button>
      </div>
      <TodoFilters onFilter={filterTodos} />
      <AppProvider
        value={{
          todos: filter === Filter.All ? todoList : getFilteredTodos(filter),
          addTodo,
          toggleTodo,
        }}
      >
        <TodoList />
      </AppProvider>
    </section>
  );
};
