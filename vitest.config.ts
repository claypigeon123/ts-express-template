/// <reference types='vitest' />
import { defineConfig } from 'vitest/config';


export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            provider: 'v8',
            reporter: ['lcov', 'text', 'json', 'html']
        },
        testTimeout: 50000
    },
})