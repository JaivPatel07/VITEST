import { describe, test, expect } from "vitest"
import request from "supertest"
import app from "../src/server.js"

describe("API tests", () => {

  test("GET /hello should return message", async () => {

    const response = await request(app).get("/hello")

    expect(response.status).toBe(200)

    expect(response.body.message).toBe("Hello World")

  })

})