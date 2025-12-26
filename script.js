const input = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("Li");
  li.textContent = "- " + input.value;
  li.classList.add("task");
  
  taskList.append(li);

  input.value = "";
});
