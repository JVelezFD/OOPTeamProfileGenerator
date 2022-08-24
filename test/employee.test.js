//setting up main employee test for jest 

import Employee from "../lib/employee";

test("Can start the employee process", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name", () => {
  const name = "Jesus";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id ", () => {
  const testValue = 100;
  const e = new Employee("Bam", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email ", () => {
  const testValue = "test@testemail.com";
  const e = new Employee("Bam", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name from the function", () => {
  const testValue = "Jesus";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id from the function", () => {
  const testValue = 100;
  const e = new Employee("Bam", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email from the function", () => {
  const testValue = "test@testemail.com";
  const e = new Employee("Bam", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('can get the role from the function', () => {
  const testValue = "Employee";
  const e = new Employee("Jesus", 1, "test@testemail.com");
  expect(e.getRole()).toBe(testValue);
});