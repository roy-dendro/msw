import 'whatwg-fetch'

// Makes sure style rules are included in snapshots, https://github.com/styled-components/jest-styled-components
// import 'jest-styled-components'
// Adds custom jest matchers from jest-dom like toHaveAttribute and toHaveStyle, https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
// This enables us to write async tests, either we add this or configure babel differently, this is easier for now.
import 'regenerator-runtime/runtime'

import { server } from './mocks/server'

beforeAll(() => {
    // Enable the mocking in tests.
    server.listen()
    console.log('server.listen')
})

afterEach(() => {
    // Reset any runtime handlers tests may use.
    server.resetHandlers()
    console.log('server.resetHandlers')
})

afterAll(() => {
    // Clean up once the tests are done.
    server.close()
    console.log('server.close')
})
