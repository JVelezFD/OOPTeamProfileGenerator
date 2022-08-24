//setting up intern test for  Jest

import Intern from "../lib/Intern.js";

test("Got school value", () => {
  const testValue = "Harvard";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('role should be intern', () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("got school using the function", () => {
  const testValue = "Harvard";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});