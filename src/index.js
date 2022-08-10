/** @format */
import Todo from "./operation.js";
import "./style.css";

const btnAdd = document.querySelector(".btn-add");
const btnRefresh = document.querySelector(".btn-refresh");
const btnClear = document.querySelector(".btn-clear");

const tasks = [];

const todo = new Todo();

btnAdd.addEventListener("click", todo.addTask);
