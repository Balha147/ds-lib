import{i as e}from"./preload-helper-G0Y2f6MP.js";var t,n=e((()=>{t={corail_lib_brand:`#ff4b33`,corail_lib_dark:`#db3924`,gris_sable_light:`#ede8e6`,gris_sable_dark:`#e4d8c4`,jaune_ivoire_light:`#fcf7e7`,jaune_ivoire_dark:`#f6ebc8`,jaune_light:`#f4ec5b`,jaune_dark:`#f9bd00`,orange:`#ff8347`,orange_dark:`#d14600`,orange_hover:`#d14600`,vert_light:`#03dfb2`,vert_dark:`#008275`,bleu_turquoise_light:`#5ad5d9`,bleu_turquoise_middle:`#008299`,bleu_turquoise_dark:`#006374`,bleu_light:`#4283d1`,bleu_dark:`#1a283e`,bleu_klein_light:`#5f65e3`,bleu_klein_dark:`#484dad`,bleu_klein_dark_a:`#30369e`,violet_light:`#6d4ca7`,violet_dark:`#4b218e`,mauve:`#d4c0f0`,rose_light:`#f4b5d4`,rose_dark:`#d81e88`,rose_fushia:`#b9066c`,rouge_framboise:`#de2b5b`,rose_chair_light:`#f0b7a5`,rose_chair_dark:`#cca196`,vert_positif:`#1e7000`,rouge_negatif:`#cc0000`,bleu_texte:`#2964ae`,alerte_vert_positif:`#bddab2`,alerte_rouge_negatif:`#f9b2b2`,alerte_bleu_information:`#c1d5ee`,alerte_jaune_attention:`#f9f5ad`,blanc:`#ffffff`,noir:`#222222`,gris_light:`#e1e1e1`,gris_dark:`#636363`,gris_background:`#f6f6f6`,corail_lib_brand_a:`#ad1400`,corail_lib_dark_a:`#8a1f10`,orange_a:`#ffb896`,orange_dark_a:`#d14600`,vert_dark_a:`#006157`,bleu_turquoise_middle_a:`#005f70`,bleu_turquoise_dark_a:`#004450`,bleu_light_a:`#255998`,bleu_klein_light_a:`#3840dc`,violet_light_a:`#67489d`,rose_dark_a:`#a61768`,rose_fushia_a:`#870950`,rouge_framboise_a:`#ac1b42`,rose_chair_dark_a:`#d2aca2`,violet_dark_a:`#381078`,vert_positif_a:`#165200`,rouge_negatif_a:`#940000`,bleu_texte_a:`#1d487c`,gris_dark_a:`#474747`,corail_lib_brand_linear:`linear-gradient(225deg, #ff7643 0%, #ff4b33 100%)`,gris_sable_light_linear:`linear-gradient(225deg, #faf5f3 0%, #ede8e6 100%)`,gris_sable_dark_linear:`linear-gradient(225deg, #f8f1e6 0%, #e4d8c4 100%)`,jaune_ivoire_light_linear:`linear-gradient(225deg, #fffdf6 0%, #fcf7e7 100%)`,jaune_ivoire_dark_linear:`linear-gradient(225deg, #fffbed 0%, #f6ebc8 100%)`,jaune_light_linear:`linear-gradient(225deg, #fffbb7 0%, #f8f169 100%)`,jaune_dark_linear:`linear-gradient(225deg, #ffdc6e 0%, #f9bd00 100%)`,orange_linear:`linear-gradient(225deg, #ffa51b 0%, #ff8347 100%)`,vert_light_linear:`linear-gradient(225deg, #aeffef 0%, #03dfb2 100%)`,vert_dark_linear:`linear-gradient(224deg, #005a51 0%, #008275 100%)`,bleu_turquoise_light_linear:`linear-gradient(225deg, #b5fdff 0%, #5ad5d9 100%)`,bleu_turquoise_middle_linear:`linear-gradient(225deg, #007286 0%, #008299 100%)`,bleu_turquoise_dark_linear:`linear-gradient(225deg, #01414c 0%, #006374 100%)`,bleu_light_linear:`linear-gradient(225deg, #1f5597 0%, #4283d1 100%)`,bleu_klein_light_linear:`linear-gradient(226deg, #3d44c9 0%, #5f65e3 100%)`,bleu_klein_dark_linear:`linear-gradient(225deg, #232876 0%, #484dad 100%)`,violet_light_linear:`linear-gradient(225deg, #593894 0%, #6d4ca7 100%)`,violet_dark_linear:`linear-gradient(225deg, #330f6d 0%, #4b218e 100%)`,mauve_linear:`linear-gradient(225deg, #f2e9ff 0%, #d4c0f0 100%)`,rose_light_linear:`linear-gradient(225deg, #ffe8f3 0%, #f4b5d4 100%)`,rose_dark_linear:`linear-gradient(225deg, #a30961 0%, #d81e88 100%)`,rose_fushia_linear:`linear-gradient(225deg, #8d0151 0%, #b9066c 100%)`,rose_framboise_linear:`linear-gradient(225deg, #b50d3a 0%, #de2b5b 100%)`,rose_chair_light_linear:`linear-gradient(225deg, #ffdfd2 0%, #f0b7a5 100%)`,rose_chair_dark_linear:`linear-gradient(225deg, #edd5ce 0%, #cca196 100%)`}})),r,i,a,o;e((()=>{n(),r={title:`Foundation/Colors`,parameters:{layout:`fullscreen`}},i=Object.entries(t).map(([e,t])=>({key:e,value:t,bgClass:`bg-${e}`,colorClass:`color-${e}`})),a={render:()=>({props:{colors:i},template:`
      <div style="padding:32px;font-family:system-ui,sans-serif;background:#fafafa;">
        <h1 style="margin-bottom:24px;">🎨 Palette de couleurs</h1>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;">

          <div
            *ngFor="let color of colors"
            style="background:white;border-radius:8px;border:1px solid #e5e7eb;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.05);">

            <div
              [ngClass]="color.bgClass"
              style="height:80px;width:100%;border-bottom:1px solid #f3f4f6;">
            </div>

            <div style="padding:12px;display:flex;flex-direction:column;gap:6px;">

              <strong style="font-size:14px;">
                {{ color.key }}
              </strong>

              <span style="font-size:12px;font-family:monospace;color:#6b7280;">
                {{ color.value }}
              </span>

              <code style="font-size:11px;background:#f3f4f6;padding:2px 6px;border-radius:4px;width:fit-content;">
                .{{ color.bgClass }}
              </code>

              <code style="font-size:11px;background:#f3f4f6;padding:2px 6px;border-radius:4px;width:fit-content;">
                .{{ color.colorClass }}
              </code>

            </div>

          </div>

        </div>
      </div>
    `})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    props: {
      colors: colorsList
    },
    template: \`
      <div style="padding:32px;font-family:system-ui,sans-serif;background:#fafafa;">
        <h1 style="margin-bottom:24px;">🎨 Palette de couleurs</h1>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;">

          <div
            *ngFor="let color of colors"
            style="background:white;border-radius:8px;border:1px solid #e5e7eb;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.05);">

            <div
              [ngClass]="color.bgClass"
              style="height:80px;width:100%;border-bottom:1px solid #f3f4f6;">
            </div>

            <div style="padding:12px;display:flex;flex-direction:column;gap:6px;">

              <strong style="font-size:14px;">
                {{ color.key }}
              </strong>

              <span style="font-size:12px;font-family:monospace;color:#6b7280;">
                {{ color.value }}
              </span>

              <code style="font-size:11px;background:#f3f4f6;padding:2px 6px;border-radius:4px;width:fit-content;">
                .{{ color.bgClass }}
              </code>

              <code style="font-size:11px;background:#f3f4f6;padding:2px 6px;border-radius:4px;width:fit-content;">
                .{{ color.colorClass }}
              </code>

            </div>

          </div>

        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}},o=[`Palette`]}))();export{a as Palette,o as __namedExportsOrder,r as default};