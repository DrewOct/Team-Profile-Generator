const Engineer = require(`../lib/Engineer`);

test("instance test", () => {
    const obj = new Engineer("Sue", 5143, "sueMulr@gmail.com", "SuMulRon")
    expect(typeof(obj)).toBe("object")
})

test("github", () => {
    const expectedValue = "SuMulRon"
    const obj = new Engineer("Sue", 5143, "sueMulr@gmail.com", "SuMulRon")
    expect(obj.github).toBe(expectedValue)
})

test("getGithub", () => {
    const expectedValue = "SuMulRon"
    const obj = new Engineer("Sue", 5143, "sueMulr@gmail.com", expectedValue)
    expect(obj.getGithub()).toBe(expectedValue)
})

test("getRole", () => {
    const expectedValue = "Engineer"
    const obj = new Engineer("Sue", 5143, "sueMulr@gmail.com", "SuMulRon")
    expect(obj.getRole()).toBe(expectedValue)
})