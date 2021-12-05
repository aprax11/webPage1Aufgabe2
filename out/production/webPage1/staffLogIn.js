function showList() {
    let studList = document.querySelector('#studList');
    let courseSelection = document.getElementById("courses");
    let selectedCourse = courseSelection.options[courseSelection.selectedIndex].text;
    studList.innerHTML="";
    let studs;

    switch(selectedCourse) {
        case "web dev":
            studs = [
                {
                    student_id: 1,
                    first_name: 'Paul2',
                    last_name: 'Paulson2',
                    dob: new Date('2005-12-17'),
                    gender: 'Male',
                    department: '42',
                    email_id: 'paulson2@mail.com'
                }
            ]
            break;
        case "programming":
            studs = [
                {
                    student_id: 333,
                    first_name: 'Hans',
                    last_name: 'Pyrlik',
                    dob: new Date('2003-12-17'),
                    gender: 'Male',
                    department: '1',
                    email_id: 'pyl@mail.com'
                }
            ]
            break;
    }

    let headers = ['student ID', 'First Name', 'Last Name', 'Birthday', 'Gender', 'department', 'Email-ID']

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

    studs.forEach(student => {
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

    studList.appendChild(table);

}