const employees = [
  {
    "name": "Alice Johnson",
    "age": 29,
    "department": "Engineering",
    "salary": 75000
  },
  {
    "name": "Bob Smith",
    "age": 34,
    "department": "Marketing",
    "salary": 68000
  },
  {
    "name": "Carol Williams",
    "age": 41,
    "department": "Marketing",
    "salary": 82000
  },
  {
    "name": "David Brown",
    "age": 26,
    "department": "Human Resources",
    "salary": 61000
  }
];

function avgAge(ages){    
    let sum = 0;
    for(elem in employees){
        sum += employees[elem].age;
    }
    return sum / employees.length;
}

function countNames(depName, listOfemployees){
    let counter = 0;
    for(let elem in listOfemployees){
        if(depName == listOfemployees[elem].department)
            counter++;
    }
    return counter;
}

function maxSalary(){
    let maxSalary = employees[0].salary;
    for(let elem in employees){
        if(employees[elem].salary >= maxSalary){
            maxSalary = employees[elem].salary;
        }
    }
    return maxSalary;
}

countemployees = countNames("Marketing", employees);
console.log( countemployees);
