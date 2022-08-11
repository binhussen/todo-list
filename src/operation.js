/** @format */

const input = document.querySelector(".input");
const tasksList = document.querySelector(".list");
export default class Todo {
	tasks;

	constructor() {
		this.tasks = [];
	}

	addTask = (e) => {
		e.preventDefault();
		const task = {
			index: this.tasks.length,
			description: input.value,
			completed: false,
		};
		this.tasks.push(task);
		this.displayTasks();
	};

	displayTasks = () => {
		this.tasks.sort((a, b) => a.index - b.index);
		tasksList.innerHTML = "";
		this.tasks.forEach((task, i) => {
			tasksList.innerHTML += `
            <li class="task">
                <input class="checkbox" type="checkbox" ${
									task.completed ? "checked" : "unchecked"
								}>
            <p class="disc">${task.description}</p>
            <button type="button" class="btn btn-remove"><i id="${
							task.index
						}" class="fa fa-times remove" aria-hidden="true"></i></button>
        </li>
  `;
		});
	};

	removeTask = (i) => {
		const filteredTasks = this.tasks.filter((task) => task.index !== +i);
		this.displayTasks();
	};
}
