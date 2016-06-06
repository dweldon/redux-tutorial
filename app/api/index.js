import { v4 } from 'node-uuid';

const fakeDatabase = {
  todos: [
    { id: v4(), completed: true, text: 'hey' },
    { id: v4(), completed: true, text: 'ho' },
    { id: v4(), completed: false, text: "let's go" },
  ],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error('Boom!');
    }

    switch (filter) {
      case 'all': return fakeDatabase.todos;
      case 'active': return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed': return fakeDatabase.todos.filter(t => t.completed);
      default: throw new Error(`Unknown filter ${filter}`);
    }
  });
