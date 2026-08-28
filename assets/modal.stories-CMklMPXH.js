import{i as e}from"./preload-helper-G0Y2f6MP.js";import{i as t,t as n}from"./dist-_fqtV9zk.js";var r,i,a,o,s,c,l,u,d,f;e((()=>{n(),r={title:`Components/Modal`,tags:[`autodocs`],decorators:[t({imports:[]})],parameters:{layout:`centered`,docs:{description:{component:`
Le composant **Modal** utilise le système de modal fourni par **Bootstrap**.

Cette story permet de démontrer différentes configurations Bootstrap :

- modal standard ;
- tailles \`sm\`, \`lg\` et \`xl\` ;
- modal centrée verticalement ;
- modal scrollable ;
- combinaison des différentes options.

Les styles sont centralisés dans la librairie et reposent sur Bootstrap ainsi que sur les tokens/styles personnalisés du Design System.
                `}}}},i={name:`Default`,render:()=>({template:`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#defaultModal"
            >
                Open Modal
            </button>

            <div
                class="modal fade"
                id="defaultModal"
                tabindex="-1"
                aria-labelledby="defaultModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="defaultModalLabel"
                            >
                                Default Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                This is a standard Bootstrap modal.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary"
                            >
                                Save changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `}),parameters:{docs:{description:{story:`
Modal Bootstrap standard avec header, body et footer.
                `}}}},a={name:`Small`,render:()=>({template:`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#smallModal"
            >
                Open Small Modal
            </button>

            <div
                class="modal fade"
                id="smallModal"
                tabindex="-1"
                aria-labelledby="smallModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="smallModalLabel"
                            >
                                Small Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                A small Bootstrap modal.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `})},o={name:`Large`,render:()=>({template:`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#largeModal"
            >
                Open Large Modal
            </button>

            <div
                class="modal fade"
                id="largeModal"
                tabindex="-1"
                aria-labelledby="largeModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="largeModalLabel"
                            >
                                Large Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p>
                                This modal uses the Bootstrap
                                <code>modal-lg</code> size.
                            </p>

                            <p class="mb-0">
                                It can be useful for larger forms,
                                configuration screens or detailed content.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary"
                            >
                                Save changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `})},s={name:`Extra Large`,render:()=>({template:`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#extraLargeModal"
            >
                Open Extra Large Modal
            </button>

            <div
                class="modal fade"
                id="extraLargeModal"
                tabindex="-1"
                aria-labelledby="extraLargeModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="extraLargeModalLabel"
                            >
                                Extra Large Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                This modal uses the Bootstrap
                                <code>modal-xl</code> size.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `})},c={name:`Centered`,render:()=>({template:`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#centeredModal"
            >
                Open Centered Modal
            </button>

            <div
                class="modal fade"
                id="centeredModal"
                tabindex="-1"
                aria-labelledby="centeredModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="centeredModalLabel"
                            >
                                Centered Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                The modal is vertically centered using
                                Bootstrap's
                                <code>modal-dialog-centered</code> class.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `}),parameters:{docs:{description:{story:`
Utilise la classe Bootstrap \`modal-dialog-centered\`
pour centrer verticalement le modal.
                `}}}},l={name:`Scrollable`,render:()=>({template:`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#scrollableModal"
            >
                Open Scrollable Modal
            </button>

            <div
                class="modal fade"
                id="scrollableModal"
                tabindex="-1"
                aria-labelledby="scrollableModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="scrollableModalLabel"
                            >
                                Scrollable Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">

                            <p>
                                This modal demonstrates Bootstrap's
                                scrollable dialog.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>

                            <p>
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>

                            <p>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </p>

                            <p>
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>

                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium.
                            </p>

                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit.
                            </p>

                            <p>
                                Neque porro quisquam est, qui dolorem ipsum
                                quia dolor sit amet.
                            </p>

                            <p>
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam.
                            </p>

                            <p class="mb-0">
                                End of the scrollable content.
                            </p>

                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `}),parameters:{docs:{description:{story:`
Utilise la classe Bootstrap \`modal-dialog-scrollable\`
afin de permettre le scroll du contenu du modal.
                `}}}},u={name:`Centered + Large`,render:()=>({template:`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#centeredLargeModal"
            >
                Open Centered Large Modal
            </button>

            <div
                class="modal fade"
                id="centeredLargeModal"
                tabindex="-1"
                aria-labelledby="centeredLargeModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="centeredLargeModalLabel"
                            >
                                Centered Large Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                Large modal vertically centered on the screen.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary"
                            >
                                Confirm
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `})},d={name:`Form`,render:()=>({template:`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#formModal"
            >
                Open Form Modal
            </button>

            <div
                class="modal fade"
                id="formModal"
                tabindex="-1"
                aria-labelledby="formModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="formModalLabel"
                            >
                                Create account
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">

                            <div class="mb-3">
                                <label
                                    for="modal-name"
                                    class="form-label"
                                >
                                    Name
                                </label>

                                <input
                                    id="modal-name"
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your name"
                                >
                            </div>

                            <div class="mb-3">
                                <label
                                    for="modal-email"
                                    class="form-label"
                                >
                                    Email
                                </label>

                                <input
                                    id="modal-email"
                                    type="email"
                                    class="form-control"
                                    placeholder="name@example.com"
                                >
                            </div>

                            <div class="mb-0">
                                <label
                                    for="modal-message"
                                    class="form-label"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="modal-message"
                                    class="form-control"
                                    rows="4"
                                ></textarea>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `})},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => ({
    template: \`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#defaultModal"
            >
                Open Modal
            </button>

            <div
                class="modal fade"
                id="defaultModal"
                tabindex="-1"
                aria-labelledby="defaultModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="defaultModalLabel"
                            >
                                Default Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                This is a standard Bootstrap modal.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary"
                            >
                                Save changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Modal Bootstrap standard avec header, body et footer.
                \`
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Small',
  render: () => ({
    template: \`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#smallModal"
            >
                Open Small Modal
            </button>

            <div
                class="modal fade"
                id="smallModal"
                tabindex="-1"
                aria-labelledby="smallModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="smallModalLabel"
                            >
                                Small Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                A small Bootstrap modal.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        \`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Large',
  render: () => ({
    template: \`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#largeModal"
            >
                Open Large Modal
            </button>

            <div
                class="modal fade"
                id="largeModal"
                tabindex="-1"
                aria-labelledby="largeModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="largeModalLabel"
                            >
                                Large Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p>
                                This modal uses the Bootstrap
                                <code>modal-lg</code> size.
                            </p>

                            <p class="mb-0">
                                It can be useful for larger forms,
                                configuration screens or detailed content.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary"
                            >
                                Save changes
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        \`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Extra Large',
  render: () => ({
    template: \`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#extraLargeModal"
            >
                Open Extra Large Modal
            </button>

            <div
                class="modal fade"
                id="extraLargeModal"
                tabindex="-1"
                aria-labelledby="extraLargeModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="extraLargeModalLabel"
                            >
                                Extra Large Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                This modal uses the Bootstrap
                                <code>modal-xl</code> size.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Centered',
  render: () => ({
    template: \`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#centeredModal"
            >
                Open Centered Modal
            </button>

            <div
                class="modal fade"
                id="centeredModal"
                tabindex="-1"
                aria-labelledby="centeredModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="centeredModalLabel"
                            >
                                Centered Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                The modal is vertically centered using
                                Bootstrap's
                                <code>modal-dialog-centered</code> class.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Utilise la classe Bootstrap \\\`modal-dialog-centered\\\`
pour centrer verticalement le modal.
                \`
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Scrollable',
  render: () => ({
    template: \`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#scrollableModal"
            >
                Open Scrollable Modal
            </button>

            <div
                class="modal fade"
                id="scrollableModal"
                tabindex="-1"
                aria-labelledby="scrollableModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="scrollableModalLabel"
                            >
                                Scrollable Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">

                            <p>
                                This modal demonstrates Bootstrap's
                                scrollable dialog.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>

                            <p>
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>

                            <p>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </p>

                            <p>
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>

                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium.
                            </p>

                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit.
                            </p>

                            <p>
                                Neque porro quisquam est, qui dolorem ipsum
                                quia dolor sit amet.
                            </p>

                            <p>
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam.
                            </p>

                            <p class="mb-0">
                                End of the scrollable content.
                            </p>

                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Utilise la classe Bootstrap \\\`modal-dialog-scrollable\\\`
afin de permettre le scroll du contenu du modal.
                \`
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Centered + Large',
  render: () => ({
    template: \`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#centeredLargeModal"
            >
                Open Centered Large Modal
            </button>

            <div
                class="modal fade"
                id="centeredLargeModal"
                tabindex="-1"
                aria-labelledby="centeredLargeModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="centeredLargeModalLabel"
                            >
                                Centered Large Modal
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">
                            <p class="mb-0">
                                Large modal vertically centered on the screen.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary"
                            >
                                Confirm
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        \`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Form',
  render: () => ({
    template: \`
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#formModal"
            >
                Open Form Modal
            </button>

            <div
                class="modal fade"
                id="formModal"
                tabindex="-1"
                aria-labelledby="formModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1
                                class="modal-title fs-5"
                                id="formModalLabel"
                            >
                                Create account
                            </h1>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div class="modal-body">

                            <div class="mb-3">
                                <label
                                    for="modal-name"
                                    class="form-label"
                                >
                                    Name
                                </label>

                                <input
                                    id="modal-name"
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your name"
                                >
                            </div>

                            <div class="mb-3">
                                <label
                                    for="modal-email"
                                    class="form-label"
                                >
                                    Email
                                </label>

                                <input
                                    id="modal-email"
                                    type="email"
                                    class="form-control"
                                    placeholder="name@example.com"
                                >
                            </div>

                            <div class="mb-0">
                                <label
                                    for="modal-message"
                                    class="form-label"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="modal-message"
                                    class="form-control"
                                    rows="4"
                                ></textarea>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        \`
  })
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Small`,`Large`,`ExtraLarge`,`Centered`,`Scrollable`,`CenteredLarge`,`Form`]}))();export{c as Centered,u as CenteredLarge,i as Default,s as ExtraLarge,d as Form,o as Large,l as Scrollable,a as Small,f as __namedExportsOrder,r as default};