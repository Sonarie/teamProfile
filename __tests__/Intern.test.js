const Intern = require("../lib/Intern");

test("create a new Intern role", () => {
  var testName = "Luci";
  var testId = 55;
  var testEmail = "lu@yahoo";
  var testSchool = "westonka";

  const intern = new Intern(testName, testId, testEmail, testSchool);

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

const interns = new Intern("Luci", 55, "lu@yahoo", "Westonka");

interns.getName();
interns.getId();
interns.getEmail();
interns.getSchool();
