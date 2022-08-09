const Employee = require(`../lib/Employee`);

test("instance test", () => {
    const obj = new Employee("Sue", 5143, "sueMulr@gmail.com")
    expect(typeof(obj)).toBe("object")
})

test("name property test -constructor", () => {
    const expectedValue = "Sue"
    const obj = new Employee(expectedValue, 5143, "sueMulr@gmail.com")
    expect(obj.name).toBe(expectedValue)
})

test("id", () => {
    const expectedValue = 5143
    const obj = new Employee("Sue", expectedValue, "sueMulr@gmail.com")
    expect(obj.id).toBe(expectedValue)
})

test("email", () => {
    const expectedValue = "sueMulr@gmail.com"
    const obj = new Employee("Sue", 5143, expectedValue)
    expect(obj.email).toBe(expectedValue)
})

test("getName", () => {
    const expectedValue = "Sue Mulroney"
    const obj = new Employee(expectedValue, 5143, "sueMulr@gmail.com")
    expect(obj.getName()).toBe(expectedValue)
})

test("getID", () => {
    const expectedValue = 5143
    const obj = new Employee("Sue", expectedValue, "sueMulr@gmail.com")
    expect(obj.getID()).toBe(expectedValue)
})

test("getEmail", () => {
    const expectedValue = "sueMulr@gmail.com"
    const obj = new Employee("Sue", 5143, expectedValue)
    expect(obj.getEmail()).toBe(expectedValue)
})

test("getRole", () => {
    const expectedValue = "Employee"
    const obj = new Employee("Sue", 5143, "sueMulr@gmail.com")
    expect(obj.getRole()).toBe(expectedValue)
})
