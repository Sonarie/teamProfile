const Manager = require("../lib/Manager");

test("create a new Manager role", () => {
  var testName = "Egor";
  var testId = 44;
  var testEmail = "eg@yahoo";
  var testOfficeNumber = 1212;

  const manager = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

const managers = new Manager("Egor", 44, "eg@yahoo", 1212);

managers.getName();
managers.getId();
managers.getEmail();
managers.getOfficeNumber();
