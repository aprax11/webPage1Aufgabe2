function showAdd() {
    document.getElementById("aForm").style.display="block";
}
function closeAdd() {
    document.getElementById("aForm").style.display="none"
}

let staffTable = document.querySelector('#staffTable');

let staff = [
    {
        staff_id: 1,
        first_name: 'Paul2',
        last_name: 'Paulson2',
        dob: new Date('2005-12-17'),
        gender: 'Male',
        email_id: 'paulson2@mail.com'
    }
]
let headers = ['staff ID', 'First Name', 'Last Name', 'Birthday', 'Gender', 'Email-ID']

//Source: https://www.fwait.com/how-to-create-table-from-an-array-of-objects-in-javascript/


    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    staff.forEach(student => {
        let row = document.createElement('tr');
        Object.values(student).forEach(text => {
                let cell = document.createElement('td');
                let textNode = document.createTextNode(text);
                cell.appendChild(textNode);
                row.appendChild(cell);
            }
        )
        table.appendChild(row);
    })

    staffTable.appendChild(table);

