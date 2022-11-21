//method to save data into localstorage
function save() {
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    if (contactList.length != 0) {
        console.log("Frist Condition True");
        contactList.findLast((item) => id = item.id)
    } else {
        console.log("Frist Condition False");
        id = 0
    }

    // contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if (document.getElementById('id').value) {
        console.log(`Second Condition False`);
        //edit contactlist array based on value
        contactList.forEach(value => {
            if (document.getElementById('id').value == value.id) {
                value.name = document.getElementById('name').value,
                    value.email = document.getElementById('email').value,
                    value.phone = document.getElementById('phone').value,
                    value.date = document.getElementById('date').value
            }
        });

        //remove hidden input
        document.getElementById('id').value = ''

    } else {
        console.log(`Second Condition True`);
        //save
        //get data from form
        var item = {
            id: id + 1,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value
        }

        //add item data to array contactlist
        contactList.push(item)
            // console.log(contactList.push(item));
    }

    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))

    //update table list
    allData()

    //remove form data
    document.getElementById('form').reset()
}