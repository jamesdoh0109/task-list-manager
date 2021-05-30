class Task {
    constructor(task, counter) {
        this.task = task; 
        this.row = counter; 
    }
}

var counter = 1; 
const tasks = [];

const taskInput = document.getElementById("task");
const btn = document.getElementById("button");

const d =  new Date();
const year = d.getFullYear();
const month = d.getMonth() + 1;
const date = d.getDate();
document.getElementById("date").innerHTML = month + "/" + date + "/" + year;

function addToList(task) {
    const table = document.getElementById("table");
    if (counter == 1) {
        const tr = table.tHead.children[0];
        const th1 = document.createElement("th");
        const th2 = document.createElement("th");
        th1.setAttribute("scope", "col");
        th2.setAttribute("scope", "col");
        th1.setAttribute("class", "small-cell");
        th2.setAttribute("class", "small-cell");
        th1.innerHTML = "Status";
        tr.appendChild(th1);
        tr.appendChild(th2);
    }
    
    const trs = document.createElement("img");
    trs.setAttribute("src", "/assets/img/svg/trash.svg");
    trs.setAttribute("height", "13px");
    trs.setAttribute("width", "13px");
    trs.setAttribute("id", counter);

    const chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.setAttribute("class", "form-check-input");

    const row = table.insertRow(counter);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.setAttribute("class", "text-center");
    cell2.setAttribute("class", "text-center");
    cell3.setAttribute("class", "text-center");
    cell1.innerHTML = task;
    cell2.appendChild(chk);
    cell3.appendChild(trs);
    counter++;
    console.log(counter);
    trs.addEventListener("click", () => {
        tasks.forEach(function find(element) {
            if (trs.id == element.row) {
                table.deleteRow(element.row);
                tasks.splice(element.row - 1, 1);
            } 
        });
        for (let i = trs.id - 1; i < tasks.length; i++) {
            tasks[i].row--;
            document.getElementById(i + 2).id--; 
        }
        counter--;
        if (counter == 1) {
            const row = document.getElementById("main-row");
            row.deleteCell(1);
            row.deleteCell(1);
        }
    });
}

btn.addEventListener("click", () => {
    const task = taskInput.value;
    taskInput.value = "";
    if (task == "") {
        alert("Please fill out your task.")
    } else {
        const singleTask = new Task(task, counter);
        tasks.push(singleTask);
        addToList(task);
    }
});


