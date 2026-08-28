import{i as e}from"./preload-helper-G0Y2f6MP.js";import{i as t,n,t as r}from"./public-api-CB813VaT.js";var i,a,o,s,c,l;e((()=>{r(),i={title:`Components/Icon`,component:t,tags:[`autodocs`],argTypes:{name:{control:`select`,options:n},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]}}},a={args:{name:`libicon-check`,size:`md`}},o={args:{name:`libicon-crayon`,size:`lg`},parameters:{docs:{description:{story:"Sans `label`, l'icône est purement décorative (`aria-hidden`)."}}}},s={args:{name:`libicon-check`,size:`lg`,label:`Étape validée`},parameters:{docs:{description:{story:'Avec `label`, l\'icône devient une image porteuse de sens (`role="img"`).'}}}},c={render:()=>({template:`
      <div style="display:flex; flex-wrap:wrap; gap:1rem;">
        ${n.map(e=>`<lib-icon name="${e}" size="lg" title="${e}"></lib-icon>`).join(``)}
      </div>
    `})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'libicon-check',
    size: 'md'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'libicon-crayon',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: "Sans \`label\`, l'icône est purement décorative (\`aria-hidden\`)."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'libicon-check',
    size: 'lg',
    label: 'Étape validée'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avec \`label\`, l\\'icône devient une image porteuse de sens (\`role="img"\`).'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display:flex; flex-wrap:wrap; gap:1rem;">
        \${LIB_ICON_NAMES.map(n => \`<lib-icon name="\${n}" size="lg" title="\${n}"></lib-icon>\`).join('')}
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Decorative`,`Accessible`,`AllIcons`]}))();export{s as Accessible,c as AllIcons,o as Decorative,a as Default,l as __namedExportsOrder,i as default};