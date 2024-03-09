import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonStyling } from 'components/Button/Button';

const meta = {
    argTypes: {
        styling: { control: { options: ButtonStyling, type: 'select' } },
    },
    component: Button,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    title: 'Core/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        styling: 'default',
        text: 'Button',
    },
};

export const Destructive: Story = {
    args: {
        styling: 'destructive',
        text: 'Button',
    },
};
