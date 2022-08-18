/**
 * @jest-environment jsdom
 */

import Todo from './operation.js';

describe('Manipulate Add and delete Tasks', () => {
  const todo = new Todo();
  test('Add a Task', () => {
    const taskLength = todo.tasks.length;

    todo.addTask('Test 1');
    expect(todo.tasks).toHaveLength(taskLength + 1);
  });

  test('Remove a Task', () => {
    todo.addTask('Test 2');
    const taskLength = todo.tasks.length;
    todo.removeTask(0);
    expect(todo.tasks).toHaveLength(taskLength - 1);
  });
});
