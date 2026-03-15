import { describe, test, expect } from "vitest"
import request from "supertest"
import app from "../src/app.js"

describe("API tests", () => {

  test("GET /hello", async () => {

    const res = await request(app).get("/hello")

    expect(res.status).toBe(200)

    expect(res.body.message).toBe("Hello World")

  })

})