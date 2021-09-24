import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
  const [todos, settodos] = React.useState<ITodo[]>([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    settodos(saved);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    settodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    settodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };
  const removeHandler = (id: number) => {
    const shoudRemove = confirm('Вы уверенны что хотите удалить элемент ?');
    if (shoudRemove) {
      settodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </div>
  );
};

export default TodosPage;
