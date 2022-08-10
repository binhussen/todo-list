/** @format */
import "./style.css";

const tasks = [];

const tasksList = document.querySelector(".list");

tasks.sort((a, b) => a.index - b.index);

tasks.forEach((task) => {
	tasksList.innerHTML += `
        <li class="task">
            <input class="checkbox" type="checkbox" ${
							task.completed ? "checked" : "unchecked"
						}>
            <p class="disc">${task.description}</p>
            <button type="button" class="btn btn-select"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
        </li>
  `;
});
