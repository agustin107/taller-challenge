import { TodoContainer } from '@app/components';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <h1 className="mb-6 text-4xl">Todo List</h1>
      <p className="mb-4">
        This is a simple todo list application built with React, Next.js, and
        Tailwind CSS that uses local storage to persist the todo list.
      </p>
      <TodoContainer />
    </div>
  );
}
