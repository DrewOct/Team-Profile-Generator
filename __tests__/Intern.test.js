const Intern = require(`../lib/Intern`);

test("instance test", () => {
    const obj = new Intern("Sue", 5143, "sueMulr@gmail.com", "school")
    expect(typeof(obj)).toBe("object")
})

test("school", () => {
    const expectedValue = "UCSD"
    const obj = new Intern("Sue", 5143, "sueMulr@gmail.com", expectedValue)
    expect(obj.school).toBe(expectedValue)
})

test("getSchool", () => {
    const expectedValue = "UCSD"
    const obj = new Intern("Sue", 5143, "sueMulr@gmail.com", expectedValue)
    expect(obj.getSchool()).toBe(expectedValue)
})

test("getRole", () => {
    const expectedValue = "Intern"
    const obj = new Intern("Sue", 5143, "sueMulr@gmail", 4165)
    expect(obj.getRole()).toBe(expectedValue)
})