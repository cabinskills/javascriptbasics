window.onload = function() {

var task = "Need to study Array";
var task_status = "New";


var task_1 = "Need to study Functions";
var task_status_1 = "New";


var tasks = ["Task 1", "Task 2"];

document.getElementById("task").innerHTML = task;
document.getElementById("task_status").innerHTML = task_status;

document.getElementById("task_1").innerHTML = task_1;
document.getElementById("task_status_1").innerHTML = task_status_1;

function taskComplted(task_id) {
    console.log("inside taskCompleted");
    task_status = "Completed";
    document.getElementById(task_id).innerHTML = task_status;
}

//taskComplted();

document.getElementById("task_completed").addEventListener("click", taskComplted("task_completed"));
document.getElementById("task_completed_1").addEventListener("click", taskComplted("task_completed_1"));

//setTimeout(taskComplted, 10000);

}