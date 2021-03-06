let studentList = document.querySelector('#studentList')

let students;

fetch('https://api.jsonbin.io/b/61acd21d0ddbee6f8b17bf0e/1')
    .then(response => response.json())
    .then(data => students = data)
    .then(json => console.log(json))



let headers = ['Student ID', 'First Name', 'Last Name','Gender','DOB', 'Department', 'Email', "Joining Date"]

function showSelectedListDep() {
    let courseSelection = document.getElementById("courseOptions");
    let selectedCourse = courseSelection.options[courseSelection.selectedIndex].text;
    studentList.innerHTML="";
    switch (selectedCourse) {
        case("Selectcourse"): break;
        case("IT"): showStudentListDep("IT"); break;
        case("Law"): showStudentListDep("Law");break;
    }

}

function showSelectedListSem() {
    let semesterSelection = document.getElementById("semesterOptions");
    let selectedSemester = semesterSelection.options[semesterSelection.selectedIndex].text;
    studentList.innerHTML="";
    switch (selectedSemester) {
        case("Selectsemester"): break;
        case("Winter"): showStudentListSem("Winter"); break;
        case("Sommer"): showStudentListSem("Sommer");break;

    }

}

function showStudentListSem(Semester) {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    let studentsfilter;

    if(Semester == "Sommer"){
        studentsfilter = students.filter(stud => parseInt(stud.JoiningDate.split("/")[1]) >= 4 && stud.JoiningDate.split("/")[1] < 10);
    } else {
        studentsfilter = students.filter(stud => parseInt(stud.JoiningDate.split("/")[1]) < 4 || stud.JoiningDate.split("/")[1] >= 10);
    }

    studentsfilter.forEach(student => {
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

    studentList.appendChild(table);
}

function showStudentListDep(Department) {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    students.filter(student => student.Department === Department).forEach(student => {
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

    studentList.appendChild(table);

}

