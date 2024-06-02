import { Todo } from '@app/types';
import { Input } from '@taller-challenge/ui';
import cn from 'clsx';

interface TodoItemProps extends Todo {
  toggle: (id: string) => void;
}

export const TodoItem = ({ id, title, completed, toggle }: TodoItemProps) => {
  const onChange = () => {
    toggle(id);
  };

  return (
    <div
      className={cn('flex items-center gap-2', {
        'line-through': completed,
      })}
    >
      <Input key={id} type="checkbox" checked={completed} onChange={onChange} />
      <span>{title}</span>
    </div>
  );
};
