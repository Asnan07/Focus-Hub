// Light mode toggle logic with icon swap
document.addEventListener("DOMContentLoaded", () => {
  const lightModeBtn = document.getElementById("light-mode-btn");
  const lightModeIcon = lightModeBtn.querySelector("img");
  const body = document.body;
  function setIcon() {
    if (body.classList.contains("light")) {
      lightModeIcon.src = "/icons/dark-mode.png";
      lightModeIcon.alt = "dark mode icon";
    } else {
      lightModeIcon.src = "/icons/light-mode.png";
      lightModeIcon.alt = "light mode icon";
    }
  }
  // Load mode from localStorage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
  }
  setIcon();
  lightModeBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    if (body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setIcon();
  });
});
// Only keep the correct logic for the dynamic to-do list. Removed old DOMContentLoaded and todoForm reference.

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks;
}

function updateProgress() {
  const checkboxes = document.querySelectorAll('.todo input[type="checkbox"]');
  const checked = document.querySelectorAll(
    '.todo input[type="checkbox"]:checked'
  );
  const percent =
    checkboxes.length === 0
      ? 0
      : Math.round((checked.length / checkboxes.length) * 100);
  document.getElementById("progress-bar").value = percent;
  document.getElementById("progress-percent").textContent = percent + "%";
}

function renderTasks(tasks) {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  tasks.forEach((task, idx) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";

    const leftDiv = document.createElement("div");
    leftDiv.style.display = "flex";
    leftDiv.style.alignItems = "center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.checked;
    checkbox.addEventListener("change", () => {
      tasks[idx].checked = checkbox.checked;
      saveTasks(tasks);
      updateProgress();
    });

    const label = document.createElement("label");
    label.textContent = task.text;
    label.style.marginLeft = "5px";

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(label);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.title = "Delete task";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.marginRight = "8px";
    deleteBtn.style.background = "#2f2f33";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "6px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.fontSize = "1em";
    deleteBtn.style.padding = "2px 8px";
    deleteBtn.style.marginBottom = "8px";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(idx, 1);
      saveTasks(tasks);
      renderTasks(tasks);
    });

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
  updateProgress();
}

document.addEventListener("DOMContentLoaded", () => {
  let tasks = loadTasks();
  renderTasks(tasks);
  const addTaskBtn = document.getElementById("add-task-btn");
  const newTaskInput = document.getElementById("new-task-input");
  addTaskBtn.addEventListener("click", () => {
    const text = newTaskInput.value.trim();
    if (text) {
      tasks.push({ text, checked: false });
      saveTasks(tasks);
      renderTasks(tasks);
      newTaskInput.value = "";
    }
  });
  newTaskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
