const Intern = require('../lib/Intern');

test ('Creates an Intern object', () => {
    const intern = new Intern('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")

    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})