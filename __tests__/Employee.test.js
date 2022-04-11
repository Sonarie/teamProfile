const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("create a new employee role", () => {
  var testName = "Sonja";
  var testId = 88;

  const employee = new Employee(testName, testId, "so@yahoo");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

const employees = new Employee("Sonja", 88, "so@yahoo");

employees.getName();
employees.getId();
employees.getEmail();
employees.getRole();