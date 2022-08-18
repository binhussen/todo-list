/**
 * @jest-environment jsdom
 */

import Todo from './operation.js';

describe('Manipulate Add and delete Tasks', () => {
  document.body.innerHTML = '<div> <ul class="list"></ul> </div>';

  const todo = new Todo();
  const taskLength = todo.tasks.length;

  test('Add a Task', () => {
    todo.addTask('Test 1');
    expect(todo.tasks).toHaveLength(taskLength + 1);
  });

  test('Adding task to DOM', () => {
    const list = document.querySelectorAll('.task');
    expect(list).toHaveLength(taskLength + 1);
  });

  test('Remove a Task', () => {
    todo.addTask('Test 2');
    const taskLength = todo.tasks.length;
    todo.removeTask(0);
    expect(todo.tasks).toHaveLength(taskLength - 1);
  });

  test('Remove task from DOM', () => {
    todo.addTask('Test 2');
    const taskLength = todo.tasks.length;
    todo.removeTask(0);
    const list = document.querySelectorAll('.task');
    expect(list).toHaveLength(taskLength - 1);
  });
});
