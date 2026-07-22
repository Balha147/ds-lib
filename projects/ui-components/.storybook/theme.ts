import { create } from 'storybook/theming';

export default create({
    base: 'dark',

    brandTitle: 'HEDI Design System',
    brandUrl: '/',

    colorPrimary: '#6366f1',
    colorSecondary: '#4f46e5',

    appBg: '#0f172a',
    appContentBg: '#1e293b',
    appPreviewBg: '#0f172a',
    appBorderColor: '#334155',
    appBorderRadius: 8,

    fontBase: 'Inter, system-ui, -apple-system, sans-serif',
    fontCode: 'ui-monospace, monospace',

    textColor: '#f8fafc',
    textMutedColor: '#94a3b8',

    barTextColor: '#94a3b8',
    barSelectedColor: '#818cf8',
    barBg: '#1e293b',

    inputBg: '#0f172a',
    inputBorder: '#334155',
    inputTextColor: '#f8fafc',
    inputBorderRadius: 6,
});