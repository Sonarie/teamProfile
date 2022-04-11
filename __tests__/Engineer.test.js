const Engineer = require("../lib/Engineer");

test("create a new engineer role", () => {
  var testName = "Empress";
  var testId = 77;
  var testEmail = "em@yahoo";
  var testGithub = "https//:em/github.com";

  const engineer = new Engineer(testName, testId, testEmail, testGithub);

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

const engineers = new Engineer(
  "Empress",
  77,
  "em@yahoo",
  "https//:em/github.com"
);

engineers.getName();
engineers.getId();
engineers.getEmail();
engineers.getRole();
engineers.getGithub();
