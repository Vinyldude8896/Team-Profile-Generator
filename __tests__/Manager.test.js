
const Manager = require('../lib/Manager');

test ('creates a new Manger object', () => {
    const manager = new Manager('Jacob');

    expect(manager.name).toBe(expect.any(Object));
    expect(manager.employeeId).toBe(expect.any(Object));
    expect(manager.email).toBe(expect.any(Object));
    expect(manager.officeNumber).toBe(expect.any(Object));
    expect(manager.role).toBe("Manager");

})