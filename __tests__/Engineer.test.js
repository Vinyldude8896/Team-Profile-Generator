// Test for Engineer creation

const Engineer = require('../lib/Engineer');

test ('Creates an Engineer object', () => {
    const engineer = new Engineer('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Vinyldude8896', 'Engineer')

    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

// test getName funtion
test ("Get Engineer's name", () => {
    const engineer = new Engineer('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Vinyldude8896', 'Engineer')
    expect(engineer.getName()).toEqual(expect.any(String));
})


// Test getId function
test ("Get intern's employee ID", () => {
    const engineer = new Engineer('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")
    expect(engineer.getId()).toEqual(expect.any(String));
})

//test getEmail function
test ("Get intern's email address", () => {
    const engineer = new Engineer('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")
    expect(engineer.getEmail()).toEqual(expect.any(String));
})

//test getGithub function
test ("Get intern's role",  () =>{
    const engineer = new Engineer('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")
    expect(engineer.getGithub()).toEqual('Intern');
})

// test getSchool function
test ("get intern's school name", () =>{
    const engineer = new Engineer('Kevin Reid', '001555888', 'kevinnivek@me.com', 'Intern', "University of Toronto")
    expect(engineer.getRole()).toEqual(expect.any(String));
})