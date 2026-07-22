import type { Meta, StoryObj } from '@storybook/angular-vite';
import { moduleMetadata } from '@storybook/angular-vite';

import { Fieldset } from '@ds-design-system/ui-components/fieldset';

const meta: Meta<Fieldset> = {
    title: 'Components/Fieldset',
    component: Fieldset,

    tags: ['autodocs'],

    decorators: [
        moduleMetadata({
            imports: [Fieldset],
        }),
    ],

    parameters: {
        layout: 'padded',

        docs: {
            description: {
                component: `
The **Fieldset** component groups related form controls using the native
HTML \`fieldset\` and \`legend\` elements.

It provides:

- semantic grouping of form controls;
- accessible legend;
- optional description;
- disabled state;
- multiple visual variants;
- support for projected content.

The component styling is centralized in the design system styles.
        `,
            },
        },
    },

    argTypes: {
        legend: {
            control: 'text',
            description: 'Title displayed inside the fieldset legend.',
            table: {
                category: 'Content',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: '',
                },
            },
        },

        description: {
            control: 'text',
            description: 'Optional description displayed below the legend.',
            table: {
                category: 'Content',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: '',
                },
            },
        },

        variant: {
            control: 'inline-radio',
            options: ['default', 'subtle', 'outlined'],
            description: 'Visual variant of the fieldset.',
            table: {
                category: 'Appearance',
                type: {
                    summary: "'default' | 'subtle' | 'outlined'",
                },
                defaultValue: {
                    summary: 'default',
                },
            },
        },

        disabled: {
            control: 'boolean',
            description: 'Disables all form controls inside the fieldset.',
            table: {
                category: 'State',
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
    },

    args: {
        legend: 'Personal information',
        description: 'Please provide your personal information.',
        variant: 'default',
        disabled: false,
    },
};

export default meta;

type Story = StoryObj<Fieldset>;

export const Custom: Story = {
    name: 'Custom Fieldset',

    render: (args) => ({
        props: args,

        template: `
      <lib-fieldset
        [legend]="legend"
        [description]="description"
        [variant]="variant"
        [disabled]="disabled"
      >
        <div class="row g-3">

          <div class="col-md-6">
            <label
              for="firstName"
              class="form-label"
            >
              First name
            </label>

            <input
              id="firstName"
              type="text"
              class="form-control"
              placeholder="John"
            />
          </div>

          <div class="col-md-6">
            <label
              for="lastName"
              class="form-label"
            >
              Last name
            </label>

            <input
              id="lastName"
              type="text"
              class="form-control"
              placeholder="Doe"
            />
          </div>

          <div class="col-12">
            <label
              for="email"
              class="form-label"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="john.doe@example.com"
            />
          </div>

        </div>
      </lib-fieldset>
    `,
    }),

    parameters: {
        docs: {
            description: {
                story: `
A custom fieldset using the design system \`Fieldset\` component.

The content is projected using Angular content projection.
        `,
            },
        },
    },
};

export const Bootstrap: Story = {
    name: 'Bootstrap Fieldset',

    render: () => ({
        template: `
      <fieldset class="border rounded-4 p-4">

        <legend class="float-none w-auto px-2 fs-6 fw-semibold">
          Personal information
        </legend>

        <p class="text-secondary small mb-4">
          This fieldset uses Bootstrap utilities only.
        </p>

        <div class="row g-3">

          <div class="col-md-6">
            <label
              for="bootstrapFirstName"
              class="form-label"
            >
              First name
            </label>

            <input
              id="bootstrapFirstName"
              type="text"
              class="form-control"
              placeholder="John"
            />
          </div>

          <div class="col-md-6">
            <label
              for="bootstrapLastName"
              class="form-label"
            >
              Last name
            </label>

            <input
              id="bootstrapLastName"
              type="text"
              class="form-control"
              placeholder="Doe"
            />
          </div>

          <div class="col-12">
            <label
              for="bootstrapEmail"
              class="form-label"
            >
              Email
            </label>

            <input
              id="bootstrapEmail"
              type="email"
              class="form-control"
              placeholder="john.doe@example.com"
            />
          </div>

        </div>

      </fieldset>
    `,
    }),

    parameters: {
        docs: {
            description: {
                story: `
A native HTML \`fieldset\` styled exclusively with Bootstrap utilities.

This story is useful for comparing the custom design-system implementation
with the standard Bootstrap approach.
        `,
            },
        },
    },
};

export const Subtle: Story = {
    name: 'Custom - Subtle',

    args: {
        legend: 'Notification preferences',
        description: 'Choose how you want to receive notifications.',
        variant: 'subtle',
        disabled: false,
    },

    render: (args) => ({
        props: args,

        template: `
      <lib-fieldset
        [legend]="legend"
        [description]="description"
        [variant]="variant"
        [disabled]="disabled"
      >
        <div class="form-check">
          <input
            id="emailNotifications"
            class="form-check-input"
            type="checkbox"
            checked
          />

          <label
            class="form-check-label"
            for="emailNotifications"
          >
            Email notifications
          </label>
        </div>

        <div class="form-check">
          <input
            id="pushNotifications"
            class="form-check-input"
            type="checkbox"
          />

          <label
            class="form-check-label"
            for="pushNotifications"
          >
            Push notifications
          </label>
        </div>
      </lib-fieldset>
    `,
    }),
};

export const Outlined: Story = {
    name: 'Custom - Outlined',

    args: {
        legend: 'Account settings',
        description: 'Manage your account configuration.',
        variant: 'outlined',
        disabled: false,
    },

    render: (args) => ({
        props: args,

        template: `
      <lib-fieldset
        [legend]="legend"
        [description]="description"
        [variant]="variant"
        [disabled]="disabled"
      >
        <div class="mb-3">
          <label
            for="username"
            class="form-label"
          >
            Username
          </label>

          <input
            id="username"
            type="text"
            class="form-control"
            value="john.doe"
          />
        </div>

        <div>
          <label
            for="language"
            class="form-label"
          >
            Language
          </label>

          <select
            id="language"
            class="form-select"
          >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </lib-fieldset>
    `,
    }),
};

export const Disabled: Story = {
    name: 'Disabled',

    args: {
        legend: 'Disabled fieldset',
        description: 'All controls inside this fieldset are disabled.',
        variant: 'default',
        disabled: true,
    },

    render: (args) => ({
        props: args,

        template: `
      <lib-fieldset
        [legend]="legend"
        [description]="description"
        [variant]="variant"
        [disabled]="disabled"
      >
        <div class="row g-3">

          <div class="col-md-6">
            <label
              for="disabledFirstName"
              class="form-label"
            >
              First name
            </label>

            <input
              id="disabledFirstName"
              type="text"
              class="form-control"
              value="John"
            />
          </div>

          <div class="col-md-6">
            <label
              for="disabledLastName"
              class="form-label"
            >
              Last name
            </label>

            <input
              id="disabledLastName"
              type="text"
              class="form-control"
              value="Doe"
            />
          </div>

          <div class="col-12">
            <div class="form-check">
              <input
                id="disabledAgreement"
                class="form-check-input"
                type="checkbox"
                checked
              />

              <label
                class="form-check-label"
                for="disabledAgreement"
              >
                I agree to the terms
              </label>
            </div>
          </div>

        </div>
      </lib-fieldset>
    `,
    }),

    parameters: {
        docs: {
            description: {
                story: `
Demonstrates the native disabled behavior of the \`fieldset\` element.

When the fieldset is disabled, form controls inside it become unavailable
to the user.
        `,
            },
        },
    },
};