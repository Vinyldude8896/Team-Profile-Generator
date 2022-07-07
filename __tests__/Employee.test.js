const { exportAllDeclaration } = require('@babel/types');
const Employee = require('/lib/Employee');

test ('Creates an employee object', () => {
    const employee = new Employee('Justin McLeod', 'Kevin Reid', '001555888', 'kevinnivek@me.com', 'Vinyldude8896','256', 'Engineer')

    expect(employee.managerName).toBe('Justin McLeod');
    expect(employee.name).toBe('Kevin Reid');
    expect(employee.id).toBe('001555888');
    expect(employee.email).toBe('kevinnivek@me.com');
    expect(employee.gitHub).toBe('Vinyldude8896');
    expect(employee.office).toBe('256');
    expect(employee.postion).toBe('Engineer')
})

