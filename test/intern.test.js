//setting up intern test for  Jest

import Intern from "../lib/intern";

test("Got school value", () => {
  const testValue = "Harvard";
  const e = new Intern("Bam", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('role should be intern', () => {
  const testValue = "Intern";
  const e = new Intern("Bam", 1, "test@test.com", "Harvard");
  expect(e.getRole()).toBe(testValue);
});

test("got school using the function", () => {
  const testValue = "Harvard";
  const e = new Intern("Bam", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});