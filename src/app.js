const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = [];
// Afif al amin
let IncompleteFilter = false;

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() === "") return;
  if (tasks.some(task => task.text === taskText)) {
    alert("Task dengan isi yang sama sudah ada!");
    return;
  }

  const task = {
    text: taskText.trim(),
    completed: false,
    createdAt: new Date()
  };

  tasks.push(task);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  // afif
  taskList.innerHTML = "";
  const filteredTasks = IncompleteFilter
    ? tasks.filter(task => !task.completed)
    : tasks;

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.marginBottom = "8px";
    li.style.listStyleType = "disc";
    li.style.paddingLeft = "30px";
    li.style.paddingRight = "30px";


    const span = document.createElement("span");
    span.innerHTML = "• " + task.text;
    if (task.completed) {
      span.style.textDecoration = "line-through";
    }

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Mark as Completed";
    completeBtn.style.padding = "4px 8px";
    completeBtn.style.border = "none";
    completeBtn.style.borderRadius = "4px";
    completeBtn.style.cursor = "pointer";
    completeBtn.style.backgroundColor = task.completed ? "#ffc107" : "#28a745";
    completeBtn.style.color = "#fff";

    completeBtn.style.marginLeft = "10px";
    completeBtn.onclick = () => toggleTask(index);

    li.appendChild(span);
    li.appendChild(completeBtn);
    taskList.appendChild(li);
    // afif
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// afif

function toggleFilter() {
  IncompleteFilter = !IncompleteFilter;
  renderTasks();
}

function clearAllTasks() {
  tasks = [];
  renderTasks();
}

// afif