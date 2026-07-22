import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Skeleton, SkeletonGroup } from '@ds-design-system/ui-components/skeleton';

const meta: Meta<Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['text', 'circular', 'rectangular', 'rounded'] },
        animation: { control: 'select', options: ['shimmer', 'pulse', 'none'] },
    },
};
export default meta;
type Story = StoryObj<Skeleton>;

export const Text: Story = {
    args: { variant: 'text', width: '240px' },
};

export const Circular: Story = {
    args: { variant: 'circular', width: '48px' },
};

export const Rectangular: Story = {
    args: { variant: 'rectangular', width: '320px', height: '180px' },
};

export const Rounded: Story = {
    args: { variant: 'rounded', width: '320px', height: '120px' },
};

export const PulseAnimation: Story = {
    args: { variant: 'rectangular', width: '320px', height: '120px', animation: 'pulse' },
};

export const TextLines: StoryObj<SkeletonGroup> = {
    render: () => ({
        template: `<lib-skeleton-group [lines]="4" style="max-width:400px;"></lib-skeleton-group>`,
        moduleMetadata: { imports: [SkeletonGroup] },
    }),
};

export const ProfileCard: Story = {
    render: () => ({
        template: `
      <div style="display:flex; gap:1rem; align-items:center; max-width:400px; padding:1rem; border:1px solid var(--lib-border); border-radius:12px;">
        <lib-skeleton variant="circular" width="56px"></lib-skeleton>
        <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
          <lib-skeleton variant="text" width="60%"></lib-skeleton>
          <lib-skeleton variant="text" width="40%"></lib-skeleton>
        </div>
      </div>
    `,
        moduleMetadata: { imports: [Skeleton] },
    }),
};