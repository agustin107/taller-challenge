import { TodoItem } from './todo-item';
import { useApp } from '@app/hooks';

export const TodoList = () => {
  const { todos, toggleTodo } = useApp();

  if (!todos.length) {
    return <p className='text-yellow-600'>No todos.</p>;
  }

  return (
    <ul className='flex flex-col gap-2' role='list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} toggle={toggleTodo} />
      ))}
    </ul>
  );
};
