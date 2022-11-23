//method to get all data
function allData() {
    var name = "sundhar";
    var phones = ['1231231','123123'];

    let myobj = {
        name: "sundhar",
        phone: "12312"
    }

    console.log(myobj);


    let myarrobj = [{
        name: "sundhar",
        phone: "12312"
    },
    {
        name: "raja",
        phone: "345345"
    }]

    console.log(myarrobj);


    table.innerHTML = ``
        //get data from localstorage and store to contaclist array
        //we must to use JSON.parse, because data is string, we need convert to array
        // Nulish Coalesing Operator use in string convert to array
        console.log(localStorage.getItem('listItem'));
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //contactList = localStorage.getItem('listItem');
    console.log(contactList);
    //looping data and show data in table
    contactList.forEach(function(value, i) {
        var table = document.getElementById('table');
        console.log(table);
    

        table.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                    <td>${value.phone}</td>
                    <td>${value.date}</td>
                    <td>
                        <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>`
    })
}