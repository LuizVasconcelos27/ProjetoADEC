
export function addTask(tasks, name, id = Date.now()) {
    const cleanName = name.trim();

    if (!cleanName) {
        return tasks;
    }

    return [
        ...tasks,
        {
            id,
            name: cleanName,
            completed: false
        }
    ];
}

export function toggleTask(tasks, id) {
    return tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );
}

export function deleteTask(tasks, id) {
    return tasks.filter(task => task.id !== id);
}
