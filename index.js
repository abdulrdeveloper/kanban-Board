import TaskManager from "./taskManager.js";

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-btn")) {
        if (!document.querySelector(".containerofgetUserTask")) {          
            const taskManager = new TaskManager(event.target.closest(".column"));
            taskManager.getUserData();
            taskManager.addBtnofData();
            taskManager.cancelBtnOfData();
        }
    }
});
