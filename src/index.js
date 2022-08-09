/** @format */
import "./style.css";

const tasks = [
	{
		description: "Read Official Documentation",
		completed: false,
		index: 0,
	},
	{
		description: "Read js guide",
		completed: true,
		index: 1,
	},
	{
		description: "Training on js projects",
		completed: false,
		index: 2,
	},
];

const tasksList = document.querySelector(".list");

tasks.sort((a, b) => a.index - b.index);

tasks.forEach((task) => {
	tasksList.innerHTML += `
        <li class="task">
            <input class="checkbox" type="checkbox" ${
							task.completed ? "checked" : "unchecked"
						}>
            <p class="disc">${task.description}</p>
            <button class="btn btn-select"></button>
        </li>
  `;
});
