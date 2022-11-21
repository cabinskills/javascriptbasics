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

