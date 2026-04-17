import TaskManager from "./taskManager.js";

const columns = document.querySelectorAll(".column");
const tasks = document.querySelectorAll(".tasks");
document.addEventListener("click", (event) => {

    if (event.target.classList.contains("add-btn")) {
        if (!document.querySelector(".containerofgetUserTask")) {
            const taskManager = new TaskManager();
            taskManager.getUserData();
            taskManager.addBtnofData();
            taskManager.cancelBtnOfData();
        }
    }
})
