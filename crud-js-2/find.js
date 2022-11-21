//method to get detail personal data based on id
function find(id) {
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    console.log(contactList);
    contactList.forEach(function (value) {
        if (value.id == id) {
            console.log(`Find check data elemnt in ${value.id} , ${value.name}, ${value.phone} , ${value.email}`);
            document.getElementById('id').value = value.id
            document.getElementById('name').value = value.name
            document.getElementById('email').value = value.email
            document.getElementById('phone').value = value.phone
            document.getElementById('date').value = value.date
        }
    })
}

function removeData(id) {
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList = contactList.filter(function (value) {
        console.log(value.id !=  id);
        return value.id != id;
        // console.log(value.id !=  id);
    });

    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))

    //get data again
    allData()
}