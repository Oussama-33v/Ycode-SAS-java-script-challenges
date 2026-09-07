let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 0
};

if(employee.absenceDays > 0){
    employee.finalSalary = employee.salary - employee.absenceDays * 200 + employee.bonus;
}
else{
    employee.finalSalary = employee.salary + employee.bonus;
}

console.log(employee.finalSalary);