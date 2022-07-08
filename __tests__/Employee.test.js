
const { string } = require('yargs');
const Employee = require('../lib/Employee');

test ('Creates an employee object', () => {
    const employee = new Employee('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern')

    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
})


