# VITEST Notes

This repository contains a small Node.js + Vitest learning project focused on:

- unit testing pure functions
- testing dependency injection with mocks
- API endpoint testing with Supertest

## Repository Layout

```text
VITEST/
	README.md
	vitest-learning/
		package.json
		learning/
			app.js
			calc.js
			math.js
			server.js
		learning_test/
			calc.test.js
			math.test.js
			server.test.js
		task/
			task1.js
		task_test/
			task1.test.js
```

## Project Notes

The working app is inside `vitest-learning/learning`.

- `learning/math.js`
	- `add(a, b)` returns sum
	- `multiply(a, b)` returns product

- `learning/calc.js`
	- `calculateTotal(price, taxFunction)`
	- receives a tax callback, computes `price + tax`
	- useful example of dependency injection for testability

- `learning/app.js`
	- creates an Express app
	- defines `GET /hello` returning `{ message: "Hello World" }`

- `learning/server.js`
	- starts HTTP server on port `3000`

## Test Notes

- `learning_test/math.test.js`
	- validates `add` and `multiply`
	- uses `beforeEach` for shared values

- `learning_test/calc.test.js`
	- uses `vi.fn()` to mock tax calculation
	- verifies callback-driven logic in `calculateTotal`

- `learning_test/server.test.js`
	- uses `supertest` against Express app instance
	- verifies status `200` and response body for `GET /hello`

## How To Run

From `vitest-learning`:

```bash
npm install
npm test
```

To run the server manually:

```bash
node learning/server.js
```

Then open:

- `http://localhost:3000/hello`

## Dependencies

- Runtime:
	- `express`
- Dev:
	- `vitest`
	- `supertest`

## Learning Focus

This repo is a clean starter for practicing:

- writing deterministic unit tests
- mocking with Vitest (`vi.fn`)
- API integration tests without booting an external server process