/** @format */

import { getFromLocalStorage, setLocalStorage } from './local_storage.js';

const input = document.querySelector('.input');
const tasksList = document.querySelector('.list');
export default class Todo {
  tasks;

  constructor() {
    this.tasks = getFromLocalStorage();
  }

  addTask = (e) => {
    e.preventDefault();
    const task = {
      index: this.tasks.length,
      description: input.value,
      completed: false,
    };
    this.tasks.push(task);
    setLocalStorage(this.tasks);
    this.displayTasks();
  };

  displayTasks = () => {
    this.tasks = getFromLocalStorage();
    this.tasks.sort((a, b) => a.index - b.index);
    tasksList.innerHTML = '';
    this.tasks.forEach((task) => {
      tasksList.innerHTML += `
        <li class="task"><div class="content"> <input class="checkbox" type="checkbox" ${
          task.completed ? 'checked' : 'unchecked'
        } id="${task.index}"> <input type="text" id="${task.index}" value="${
        task.description
      }" ${
        task.completed ? "class='disc completed'" : "class='disc '"
      }></input></div>
            <button type="button" class="btn btn-remove"><i id="${
              task.index
            }" class="fa fa-times remove" aria-hidden="true"></i></button>
        </li>
  `;
    });
  };

  removeTask = (i) => {
    const filteredTasks = this.tasks.filter((task) => task.index !== +i);
    filteredTasks.forEach((task, index) => {
      task.index = index;
    });
    setLocalStorage(filteredTasks);
    this.displayTasks();
  };

  complete = (i, value) => {
    const task = this.tasks.find((task) => task.index === +i);
    task.completed = value;
    setLocalStorage(this.tasks);
    this.displayTasks();
  };
}
