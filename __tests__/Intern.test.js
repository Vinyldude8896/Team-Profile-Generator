const Intern = require('../lib/Intern');


// test for creating a new Intern
test ('Creates an Intern object', () => {
    const intern = new Intern('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")

    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

// test getName function
test ("Get Intern's name", () => {
    const intern = new Intern('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")
    expect(intern.getName()).toEqual(expect.any(String));
})

//test getId function
test ("Get intern's employee ID", () => {
    const intern = new Intern('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")
    expect(intern.getId()).toEqual(expect.any(String));
})

// test getEmail function
test ("Get intern's email address", () => {
    const intern = new Intern('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")
    expect(intern.getEmail()).toEqual(expect.any(String));
})

// test getRole function
test ("Get intern's role",  () =>{
    const intern = new Intern('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")
    expect(intern.getRole()).toEqual('Intern');
})

// test getSchool function
test ("get intern's school name", () =>{
    const intern = new Intern('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")
    expect(intern.getRole()).toEqual(expect.any(String));
})