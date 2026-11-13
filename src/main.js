
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');
const emptyMessage = document.getElementById('empty-message');

let tasks = [];

function updateTasks() {
    taskList.innerHTML = '';

    const pendingTasks = tasks.filter(task => !task.completed).length;

    taskCount.textContent = `${pendingTasks} tarefas pendentes`;
    emptyMessage.style.display = tasks.length === 0 ? 'block' : 'none';

    tasks.forEach(task => {
        const li = document.createElement('li');

        const taskName = document.createElement('span');
        taskName.textContent = task.name;

        if (task.completed) {
            taskName.style.textDecoration = 'line-through';
            taskName.style.color = '#9aa59e';
        }

        const actions = document.createElement('div');

        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Desfazer' : 'Concluir';
        completeButton.onclick = () => toggleTask(task.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteTask(task.id);

        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);

        li.appendChild(taskName);
        li.appendChild(actions);

        taskList.appendChild(li);
    });
}

function addTask(name) {
    const cleanName = name.trim();

    if (!cleanName) {
        return;
    }

    tasks.push({
        id: Date.now(),
        name: cleanName,
        completed: false
    });

    updateTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    updateTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateTasks();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    addTask(input.value);
    input.value = '';
    input.focus();
});

updateTasks();
