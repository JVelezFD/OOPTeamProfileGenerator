//setting up intern test for  Jest

import Intern from "../lib/intern.js";

const intern = new Intern ('Jesus', 17, 'test@gmail.com', 'FSU');

test('School of the intern', () => {
    expect(intern.getSchool()).toEqual('FSU')
});

test('Role of employee', () => {
    expect(intern.getRole()).toEqual("Intern")
});