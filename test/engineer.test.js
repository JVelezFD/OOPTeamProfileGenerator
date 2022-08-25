//setting up engineer test for  Jest

import Engineer from "../lib/engineer.js";

const engineer = new Engineer('Jesus', 17, 'test@gmail.com', 'JVelezFD');

test('GitHub username of engineer', () => {
    expect(engineer.getGithub()).toEqual('JVelezFD')
});

test('Role of employee', () => {
    expect(engineer.getRole()).toEqual("Engineer")
});