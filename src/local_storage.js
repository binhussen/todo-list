/** @format */

export const setLocalStorage = (newTodo) => localStorage.setItem('todoList', JSON.stringify(newTodo));

export const getFromLocalStorage = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
