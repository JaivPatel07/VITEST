import { describe, test, expect,beforeEach,afterEach } from "vitest"
import { add, multiply } from "../src/math.js"

let numberA
let numberB

describe("Math Functions", () => { // describe block to group related tests if we not write this its fine but it is good practice to use describe block to group related tests
    beforeEach(() => { // beforeEach block to set up common test data before each test runs
        numberA = 2
        numberB = 3
    })
    afterEach(() => {
    console.log("Test finished")
    })

    // afterEach is used to perform cleanup ex removing temp file delete temp data etc after each test runs

    test("add two numbers", () => {
        expect(add(numberA, numberB)).toBe(5)
    })

    test("multiply two numbers", () => {
        expect(multiply(numberA, numberB)).toBe(6)
    })

})