let students = [
    {
        "ID": "1",
        "FirstName": "Tom",
        "LastName": "Holland",
        "Gender": "1",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/04/06"
    },
    {
        "ID": "2",
        "FirstName": "Paul",
        "LastName": "Holland",
        "Gender": "1",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/05/03"
    },
    {
        "ID": "3",
        "FirstName": "Berta",
        "LastName": "Holland",
        "Gender": "0",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/02/06"
    },
    {
        "ID": "4",
        "FirstName": "Lara",
        "LastName": "Holland",
        "Gender": "0",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/09/03"
    },
    {
        "ID": "5",
        "FirstName": "Tim",
        "LastName": "Holland",
        "Gender": "1",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/11/06"
    },
    {
        "ID": "6",
        "FirstName": "Jack",
        "LastName": "Holland",
        "Gender": "1",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/01/03"
    },
    {
        "ID": "7",
        "FirstName": "Pauline",
        "LastName": "Holland",
        "Gender": "0",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/07/06"
    },
    {
        "ID": "8",
        "FirstName": "Alena",
        "LastName": "Holland",
        "Gender": "0",
        "DOB": "1995/12/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/05/03"
    },
    {
        "ID": "9",
        "FirstName": "Anja",
        "LastName": "Holland",
        "Gender": "0",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/11/06"
    },
    {
        "ID": "10",
        "FirstName": "Fridolin",
        "LastName": "Holland",
        "Gender": "1",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/04/03"
    }]

let filtered = students.filter(stud => stud.Department === "prog");
let filtered2 = students.filter(stud => parseInt(stud.JoiningDate.split("/")[1]) >= 4 && stud.JoiningDate.split("/")[1] < 10); //Sommersemester