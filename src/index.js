/** @format */
import Todo from "./operation.js";
import "./style.css";

const btnAdd = document.querySelector(".btn-add");
const btnRefresh = document.querySelector(".btn-refresh");
const btnClear = document.querySelector(".btn-clear");
const tasksList = document.querySelector(".list");

const tasks = [];

const todo = new Todo();

btnAdd.addEventListener("click", todo.addTask);

tasksList.addEventListener("click", (e) => {
	if (e.target.classList.contains("remove")) {
		const targetId = e.target.getAttribute("id");
		todo.removeTask(targetId);
	}
});

document.addEventListener("DOMContentLoaded", () => {
	todo.displayTasks();
});
