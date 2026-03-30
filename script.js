let button = document.getElementById("add"); // button
let todoList = document.getElementById("todoList"); //adhu keela varudhu
let input = document.getElementById("input"); //text

let todos = [];
window.onload = () => {
  console.log("loaded");

  todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => addTodo(todo));
};
button.addEventListener("click", () => {
  todos.push(input.value.trim());
  localStorage.setItem("todos", JSON.stringify(todos));

  console.log(todos);
  addTodo(input.value.trim()); // value kudekro
  input.value = "";
});

function addTodo(todo) {
  let para = document.createElement("p");
  para.innerHTML = todo; // value
  todoList.append(para);

  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    remove(todo);


  para.addEventListener("dblclick", () => {
    todoList.removeChild(para); //through closure
    remove(todo);
  });

  function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) todos.splice(index, 1);
  }

  localStorage.setItem("todos", JSON.stringify(todos));
}
