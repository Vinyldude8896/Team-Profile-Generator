const Engineer = require('../lib/Intern');

test ('Creates an Engineer object', () => {
    const engineer = new Engineer('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Engineer', 'Vinyldude8896')

    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})