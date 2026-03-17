import { describe, test, expect, vi } from "vitest"
import { calculateTotal } from "../learning/calc.js"

//Mock = fake function used to replace real dependencies during tests

describe("calculateTotal", () => {

  test("uses tax function", () => {

    const fakeTax = vi.fn() // Create a mock function using vi.fn()

    fakeTax.mockReturnValue(10)

    const result = calculateTotal(100, fakeTax)

    expect(result).toBe(110)

  })

})