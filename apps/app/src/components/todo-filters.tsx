import { Filter } from '@app/types';
import { Button } from '@taller-challenge/ui';

interface TodoFiltersProps {
  onFilter: (filter: Filter) => () => void;
}

export const TodoFilters = ({ onFilter }: TodoFiltersProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button onClick={onFilter(Filter.All)}>All</Button>
      <Button onClick={onFilter(Filter.Active)}>Active</Button>
      <Button onClick={onFilter(Filter.Completed)}>Completed</Button>
    </div>
  );
};
