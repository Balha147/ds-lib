import { Meta, StoryObj } from '@storybook/angular-vite';

import { LIB_COLORS } from './colors';

const meta: Meta = {
    title: 'Foundation/Colors',
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const colorsList = Object.entries(LIB_COLORS).map(([key, value]) => ({
    key,
    value,
    bgClass: `bg-${key}`,
    colorClass: `color-${key}`,
}));

export const Palette: StoryObj = {
    render: () => ({
        props: {
            colors: colorsList,
        },
        template: `
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
    `,
    }),
};