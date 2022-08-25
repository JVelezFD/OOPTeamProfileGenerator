//setting up manger test for  Jest

import Manager from "../lib/manager.js";

const manager = new Manager('Jesus', 17, 'test@gmail.com', 5555555555);

test('Office Number of manager', () => {
    expect(manager.getOfficeNumber()).toEqual(55)
});

test('Role of employee', () => {
    expect(manager.getRole()).toEqual("Manager")
});