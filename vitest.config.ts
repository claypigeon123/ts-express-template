/// <reference types='vitest' />
import { defineConfig } from 'vitest/config';


export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            provider: 'istanbul',
            reporter: ['lcov', 'text', 'json', 'html']
        },
        testTimeout: 50000
    },
})