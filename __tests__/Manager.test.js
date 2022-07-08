
const Manager = require('../lib/Manager');

test ('Creates a new Manager object', () => {
    const manager = new Manager('Kevin Reid', '001555888', 'kevinnivek@me.com', '2567', 'Manager')

    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.role).toEqual('Manager');
})

