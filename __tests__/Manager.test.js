const Manager = require(`../lib/Manager`);

test("instance test", () => {
    const obj = new Manager("Sue", 5143, "sueMulr@gmail.com", "4165")
    expect(typeof(obj)).toBe("object")
})

test("officeNumber", () => {
    const expectedValue = 4165
    const obj = new Manager("Sue", 5143, "sueMulr@gmail.com", expectedValue)
    expect(obj.officeNumber).toBe(expectedValue)
})

test("getOfficeNumber", () => {
    const expectedValue = 4165
    const obj = new Manager("Sue", 5143, "sueMulr@gmail.com", expectedValue)
    expect(obj.getOfficeNumber()).toBe(expectedValue)
})

test("getRole", () => {
    const expectedValue = "Manager"
    const obj = new Manager("Sue", 5143, "sueMulr@gmail", 4165)
    expect(obj.getRole()).toBe(expectedValue)
})