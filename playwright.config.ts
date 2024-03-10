// Import base PR config
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,

    // Run all tests in parallel.
    fullyParallel: true,

    // Configure projects for major browsers.
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],

    // Reporter to use
    reporter: 'html',

    // Retry on CI only.
    retries: process.env.CI ? 2 : 0,

    // Look for test files in the "tests" directory, relative to this configuration file.
    testDir: 'src/components',

    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: 'http://localhost:5173',

        // Collect trace when retrying the failed test.
        trace: 'on-first-retry',
    },
    // Run your local dev server before starting the tests.
    webServer: {
        command: 'yarn dev',
        reuseExistingServer: !process.env.CI,
        url: 'http://localhost:5173',
    },
    // Opt out of parallel tests on CI.
    workers: process.env.CI ? 1 : undefined,
});
