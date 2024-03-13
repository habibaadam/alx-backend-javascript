interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York'
};


const secondStudent: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 23,
  location: 'London'
};

const studentsList : Student[] = [firstStudent, secondStudent];


let theTable = document.createElement('table');

for (let i = 0; i < studentsList.length; i++) {
  let row = theTable.insertRow();
  let name = row.insertCell();
  let location = row.insertCell();
  name.innerHTML = studentsList[i].firstName;
  location.innerHTML = studentsList[i].location;
}

document.body.appendChild(theTable);