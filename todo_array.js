
    
    var tasks = ["Task 1", "Task 2", "Need to study Array", "Task 4"];
    var tasks_status = ["New", "New", "New", "Completed"];
    
    console.log(tasks);
    console.log(tasks_status);

    console.log(tasks.length);

    function showTable() {
        var taskcount = tasks.length;
        for (var i=0; i<taskcount ; i++) {
            var table = document.getElementById("mytable");
            var row = table.insertRow(i+1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = tasks[i];
            cell2.innerHTML = tasks_status[i];
            cell3.innerHTML = "<button onClick='changeStatus("+(i)+")' id='task_button_"+(i+1)+"'>Completed</button>";
        }
       
    }

    showTable();
  
    function changeStatus(id){
       tasks_status[id] = "Completed";
       showTable();
    }




    /*document.getElementById("task").innerHTML = tasks[0];
    document.getElementById("task_status").innerHTML = task_status;
    
    document.getElementById("task_1").innerHTML = task_1;
    document.getElementById("task_status_1").innerHTML = task_status_1;
    
    function taskComplted(task_id) {
        console.log("inside taskCompleted");
        task_status = "Completed";
        document.getElementById(task_id).innerHTML = task_status;
    }
    
   
    
    document.getElementById("task_completed").addEventListener("click", taskComplted("task_completed"));
    document.getElementById("task_completed_1").addEventListener("click", taskComplted("task_completed_1")); */
    
    //setTimeout(taskComplted, 10000);
    
