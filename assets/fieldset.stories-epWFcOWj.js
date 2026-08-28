import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,L as n,R as r,Ti as i,ct as a,et as o}from"./angular-platform-CkHGXGBq.js";import{i as s,t as c}from"./dist-_fqtV9zk.js";var l,u=e((()=>{l=`<fieldset class="lib-fieldset__container" [disabled]="disabled()"
    [class.lib-fieldset__container--subtle]="variant() === 'subtle'"
    [class.lib-fieldset__container--outlined]="variant() === 'outlined'">
    @if (legend() || description()) {
    <div class="lib-fieldset__header">
        @if (legend()) {
        <legend class="lib-fieldset__legend">
            {{ legend() }}
        </legend>
        }

        @if (description()) {
        <p class="lib-fieldset__description">
            {{ description() }}
        </p>
        }
    </div>
    }

    <div class="lib-fieldset__content">
        <ng-content />
    </div>
</fieldset>`})),d,f=e((()=>{t(),u(),n(),d=class Fieldset{legend=r(``);description=r(``);variant=r(`default`);disabled=r(!1);static propDecorators={legend:[{type:a,args:[{isSignal:!0,alias:`legend`,required:!1,transform:void 0}]}],description:[{type:a,args:[{isSignal:!0,alias:`description`,required:!1,transform:void 0}]}],variant:[{type:a,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}],disabled:[{type:a,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},d=i([o({selector:`lib-fieldset`,template:l,host:{class:`lib-fieldset`,"[class.lib-fieldset--disabled]":`disabled()`}})],d)})),p=e((()=>{f()})),m,h,g,_,v,y,b;e((()=>{c(),p(),m={title:`Components/Fieldset`,component:d,tags:[`autodocs`],decorators:[s({imports:[d]})],parameters:{layout:`padded`,docs:{description:{component:`
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
        `}}},argTypes:{legend:{control:`text`,description:`Title displayed inside the fieldset legend.`,table:{category:`Content`,type:{summary:`string`},defaultValue:{summary:``}}},description:{control:`text`,description:`Optional description displayed below the legend.`,table:{category:`Content`,type:{summary:`string`},defaultValue:{summary:``}}},variant:{control:`inline-radio`,options:[`default`,`subtle`,`outlined`],description:`Visual variant of the fieldset.`,table:{category:`Appearance`,type:{summary:`'default' | 'subtle' | 'outlined'`},defaultValue:{summary:`default`}}},disabled:{control:`boolean`,description:`Disables all form controls inside the fieldset.`,table:{category:`State`,type:{summary:`boolean`},defaultValue:{summary:`false`}}}},args:{legend:`Personal information`,description:`Please provide your personal information.`,variant:`default`,disabled:!1}},h={name:`Custom Fieldset`,render:e=>({props:e,template:`
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
    `}),parameters:{docs:{description:{story:`
A custom fieldset using the design system \`Fieldset\` component.

The content is projected using Angular content projection.
        `}}}},g={name:`Bootstrap Fieldset`,render:()=>({template:`
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
    `}),parameters:{docs:{description:{story:`
A native HTML \`fieldset\` styled exclusively with Bootstrap utilities.

This story is useful for comparing the custom design-system implementation
with the standard Bootstrap approach.
        `}}}},_={name:`Custom - Subtle`,args:{legend:`Notification preferences`,description:`Choose how you want to receive notifications.`,variant:`subtle`,disabled:!1},render:e=>({props:e,template:`
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
    `})},v={name:`Custom - Outlined`,args:{legend:`Account settings`,description:`Manage your account configuration.`,variant:`outlined`,disabled:!1},render:e=>({props:e,template:`
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
    `})},y={name:`Disabled`,args:{legend:`Disabled fieldset`,description:`All controls inside this fieldset are disabled.`,variant:`default`,disabled:!0},render:e=>({props:e,template:`
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
    `}),parameters:{docs:{description:{story:`
Demonstrates the native disabled behavior of the \`fieldset\` element.

When the fieldset is disabled, form controls inside it become unavailable
to the user.
        `}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Custom Fieldset',
  render: args => ({
    props: args,
    template: \`
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
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
A custom fieldset using the design system \\\`Fieldset\\\` component.

The content is projected using Angular content projection.
        \`
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Bootstrap Fieldset',
  render: () => ({
    template: \`
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
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
A native HTML \\\`fieldset\\\` styled exclusively with Bootstrap utilities.

This story is useful for comparing the custom design-system implementation
with the standard Bootstrap approach.
        \`
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Custom - Subtle',
  args: {
    legend: 'Notification preferences',
    description: 'Choose how you want to receive notifications.',
    variant: 'subtle',
    disabled: false
  },
  render: args => ({
    props: args,
    template: \`
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
    \`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Custom - Outlined',
  args: {
    legend: 'Account settings',
    description: 'Manage your account configuration.',
    variant: 'outlined',
    disabled: false
  },
  render: args => ({
    props: args,
    template: \`
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
    \`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    legend: 'Disabled fieldset',
    description: 'All controls inside this fieldset are disabled.',
    variant: 'default',
    disabled: true
  },
  render: args => ({
    props: args,
    template: \`
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
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates the native disabled behavior of the \\\`fieldset\\\` element.

When the fieldset is disabled, form controls inside it become unavailable
to the user.
        \`
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Custom`,`Bootstrap`,`Subtle`,`Outlined`,`Disabled`]}))();export{g as Bootstrap,h as Custom,y as Disabled,v as Outlined,_ as Subtle,b as __namedExportsOrder,m as default};