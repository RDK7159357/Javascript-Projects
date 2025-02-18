function displayTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const container = document.querySelector('.tsk-container')
    if (tasks.length > 0) {
        let tasksHTML = '<ul>';
        tasks.forEach(task => {
            tasksHTML += `<li>${task}</li>`;
        });
        tasksHTML += '</ul>';
        container.innerHTML = `<label>Tasks:</label>${tasksHTML}`;
    } else {
        container.innerHTML = `<label>Tasks:</label><p>No task entered yet</p>`;
    }
}

document.getElementById('submit-btn').addEventListener('click', function(){
    const input = document.getElementById('userInput') 
    const task = input.value.trim()

    if(task!==""){
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        tasks.push(task)
        localStorage.setItem("tasks",JSON.stringify(tasks))
        input.value = ""
        displayTasks()
    }

document.addEventListener('DOMContentLoaded',displayTasks)
})