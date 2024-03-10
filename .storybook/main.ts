import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    docs: {
        autodocs: 'tag',
    },
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};
export default config;
