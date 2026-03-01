import { FilterType } from '@/types/todo';

interface TodoFilterProps {
  filter: FilterType;
  activeCount: number;
  completedCount: number;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
}

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function TodoFilter({
  filter,
  activeCount,
  completedCount,
  onFilterChange,
  onClearCompleted,
}: TodoFilterProps) {
  return (
    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
      <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>

      <div className="flex gap-1">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`rounded px-2 py-1 transition-colors hover:text-blue-500 ${
              filter === value
                ? 'font-semibold text-blue-500'
                : ''
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="transition-colors hover:text-red-500"
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
