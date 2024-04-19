let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const priority = document.getElementById('priority').value;

    const task = {
        id: Date.now(),
        text: taskText,
        priority: parseInt(priority),
        created_at: new Date()
    };

    tasks.push(task);
    renderTasks();

    taskInput.value = '';
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${task.text}</span>
            <span>Priority: ${task.priority}</span>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="removeTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    const newText = prompt('Enter new task text:', task.text);
    if (newText !== null) {
        task.text = newText.trim();
        renderTasks();
    }
}

function sortTasks() {
    const sortBy = document.getElementById('sortBy').value;

    if (sortBy === 'creation') {
        tasks.sort((a, b) => a.created_at - b.created_at);
    } else if (sortBy === 'priority') {
        tasks.sort((a, b) => b.priority - a.priority);
    }

    renderTasks();
}
