let dragged = null;

export default function DragAndDrop() {

    document.addEventListener("dragstart", (e) => {
        if (e.target.classList.contains("task")) {
            dragged = e.target;
            e.target.classList.add("dragging");
            e.dataTransfer.effectAllowed = "move";
        }
    });

    document.addEventListener("dragend", (e) => {
        if (e.target.classList.contains("task")) {
            e.target.classList.remove("dragging");
            document.querySelectorAll(".tasks").forEach(col => {
                col.classList.remove("drag-over");
            });
            dragged = null;
        }
    });

    document.addEventListener("dragover", (e) => {
        const taskContainer = e.target.closest(".tasks");
        if (taskContainer && dragged) {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
            taskContainer.classList.add("drag-over");
        }
    });

    document.addEventListener("dragleave", (e) => {
        const taskContainer = e.target.closest(".tasks");
        if (taskContainer) {
            setTimeout(() => {
                if (!taskContainer.matches(":hover")) {
                    taskContainer.classList.remove("drag-over");
                }
            }, 0);
        }
    });

    document.addEventListener("drop", (e) => {
        const taskContainer = e.target.closest(".tasks");
        if (taskContainer && dragged) {
            e.preventDefault();
            taskContainer.appendChild(dragged);
            taskContainer.classList.remove("drag-over");
        }
    });
}