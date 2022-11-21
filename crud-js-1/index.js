let selectedRow = null;
let newRow = readFormData();

function onFormSubmit() {
    if (validate()) {
        let formData = readFormData();
        console.log(formData);
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        console.log(`${isValid} "FALSE STATEMENT"`);
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        console.log(`${isValid} "TRUE STATEMENT"`);
        if (document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function readFormData() {
    let formData = {};
    formData.fullName = document.getElementById("fullName").value;
    formData.email = document.getElementById("email").value;
    formData.phone = document.getElementById("phone").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("userList").getElementsByTagName('tbody')[0];
    console.log(table);
    let newRow = table.insertRow(table.length);
    console.log(newRow);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a class = "btn">Edit</a>   
                     <a class = "btn"onClick="onDelete(this)">Delete</a>`;
}




function onDelete(Event) {
    row = Event.parentElement.parentElement;
    console.log(row);
    document.getElementById("userList").deleteRow(row.rowIndex);
    resetForm();
    console.log(resetFrom());
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    selectedRow = null;
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phone;
}


localStorage.setItem('person', JSON.stringify(newRow));
console.log('person', JSON.stringify(newRow));
const data = JSON.parse(localStorage.getItem('person'));


// const liNew = function (text) {
//     const li = document.createElement('li');
//     li.textContent = text;
//     ul.appendChild(li);
//     console.log(li);
// }