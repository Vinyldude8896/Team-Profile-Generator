
const Employee = require('../lib/Employee');

test ('Creates an employee object', () => {
    const employee = new Employee('Kevin Reid', '001555888', 'kevinnivek@me.com','Engineer')

    
    expect(employee.name).toBe('Kevin Reid');
    expect(employee.id).toBe('001555888');
    expect(employee.email).toBe('kevinnivek@me.com');
    expect(employee.role).toBe('Engineer')
})

