//setting up main employee test for jest 

import Employee from "../lib/employee.js";

const employee = new Employee('Jesus', 17, 'test@gmail.com');

test('Employee Name', () => {
    expect(employee.getName()).toEqual('Jesus')
});

test('Employee Id', () => {
    expect(employee.getId()).toEqual(17)
});

test('Employee email', () => {
    expect(employee.getEmail()).toEqual('test@gmail.com')
});

test('Employee role', () => {
    expect(employee.getRole()).toEqual("Employee")
});