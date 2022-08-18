/** @format */
import { getFromLocalStorage, setLocalStorage } from './local_storage.js';
import Todo from './operation.js';
import './style.css';

const btnAdd = document.querySelector('.btn-add');
const tasksList = document.querySelector('.list');
const btnClear = document.querySelector('.btn-clear');
const input = document.querySelector('.input');

const todo = new Todo();

document.addEventListener('DOMContentLoaded', () => {
  todo.displayTasks();
});

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  todo.addTask(input.value);
  input.value = '';
});

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = e.target.getAttribute('id');
    todo.removeTask(targetId);
  } else if (e.target.closest('.disc')) {
    const disc = e.target.closest('.disc');
    disc.addEventListener('keyup', () => {
      const tasks = getFromLocalStorage();
      const index = +disc.id;
      const task = tasks.find((task) => task.index === index);
      task.description = disc.value.trim();
      setLocalStorage(tasks);
    });
  } else if (e.target.classList.contains('checkbox')) {
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach((item) => {
      item.addEventListener('change', (e) => {
        const targetId = e.target.getAttribute('id');
        if (e.target.checked) {
          todo.complete(targetId, true);
        } else {
          todo.complete(targetId, false);
        }
      });
    });
  }
});

btnClear.addEventListener('click', () => {
  todo.clearAll();
});
