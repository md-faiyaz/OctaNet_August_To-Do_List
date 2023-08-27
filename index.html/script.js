document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";

            const deleteButton = taskItem.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });
        }
    });
});
