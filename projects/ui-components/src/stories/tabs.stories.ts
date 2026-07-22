import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { CommonModule } from '@angular/common';
import { TabsGroup, Tab } from '@ds-design-system/ui-components/tabs';

const meta: Meta<TabsGroup> = {
    title: 'Components/Tabs',
    component: TabsGroup,
    tags: ['autodocs'],

    decorators: [
        moduleMetadata({
            imports: [CommonModule, TabsGroup, Tab],
        }),
    ],

    argTypes: {
        classic: {
            control: 'boolean',
            description: 'Display tabs using Bootstrap tab style.',
        },

        position: {
            control: 'select',
            options: ['start', 'center', 'end', 'fill', 'justified'],
        },

        breakpoint: {
            control: 'select',
            options: [undefined, 'sm', 'md', 'lg', 'xl', 'xxl'],
        },

        activeIndex: {
            control: {
                type: 'number',
                min: 0,
            },
        },
    },

    render: (args) => ({
        props: args,
        template: `
      <lib-tab-group
        [classic]="classic"
        [position]="position"
        [breakpoint]="breakpoint"
        [(activeIndex)]="activeIndex"
      >

        <lib-tab label="Home">
          <h3>Home</h3>
          <p>Welcome to the home tab.</p>
        </lib-tab>

        <lib-tab label="Profile">
          <h3>Profile</h3>
          <p>User profile information.</p>
        </lib-tab>

        <lib-tab label="Settings">
          <h3>Settings</h3>
          <p>Application settings.</p>
        </lib-tab>

      </lib-tab-group>
    `,
    }),
};

export default meta;

type Story = StoryObj<TabsGroup>;

export const Default: Story = {
    args: {
        classic: false,
        position: 'start',
    },
};

export const Classic: Story = {
    args: {
        classic: true,
    },
};

export const Center: Story = {
    args: {
        position: 'center',
    },
};

export const End: Story = {
    args: {
        position: 'end',
    },
};

export const Fill: Story = {
    args: {
        position: 'fill',
    },
};

export const Justified: Story = {
    args: {
        position: 'justified',
    },
};

export const ActiveSecondTab: Story = {
    args: {
        activeIndex: 1,
    },
};

export const Responsive: Story = {
    args: {
        breakpoint: 'lg',
    },
};

export const Playground: Story = {
    args: {
        classic: false,
        position: 'start',
        breakpoint: undefined,
        activeIndex: 0,
    },
};