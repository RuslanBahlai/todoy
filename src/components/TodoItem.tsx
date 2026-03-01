'use client';

import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4 cursor-pointer accent-blue-500"
      />
      <span
        className={`flex-1 text-sm ${
          todo.completed ? 'text-gray-400 line-through dark:text-gray-500' : 'text-gray-800 dark:text-gray-100'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 transition-colors hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </li>
  );
}
