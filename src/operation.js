/** @format */

const input = document.querySelector(".input");
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
	};
}
