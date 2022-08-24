//setting up engineer test for  Jest

import Engineer from "../lib/engineer";

test("Can set the gitHub info", () => {
    const testValue = "GitHubInfo";
    const e = new Engineer("Bam", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });
  
  test('got the role from the function', () => {
    const testValue = "Engineer";
    const e = new Engineer("Bam", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("got the GH user name from the function", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Bam", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });
