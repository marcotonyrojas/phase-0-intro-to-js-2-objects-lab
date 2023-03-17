const employee = {
    name: 'marco',
    streetAdress: "123 Sesame ST"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {
    ...employee,
    [key]: value,
   }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
employee[key] = value
return employee
}
function deleteFromEmployeeByKey(employee,key) {
    const newEmployee ={employee}
    employee[key] = "Sam"
    return newEmployee
}function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}