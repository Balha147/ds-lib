import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  email,
  form,
  FormField,
  required,
} from '@angular/forms/signals';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';

import {
  Onboarding,
  StepperContainer,
  StepperControl,
  StepperQuicknav,
  StepperSection,
  StepperStep,
  StepperSummary,
  LIB_FORM_STEPPER_CONFIG,
  LIB_FORM_STEPPER_DEFAULT_CONFIG,
} from '@ds-design-system/ui-components/form-stepper';

import { Datepicker } from '@ds-design-system/ui-components/datepicker';

import {
  LibFormCardItem,
  LibFormCheckboxCard,
} from '@ds-design-system/ui-components/form-card';

import { FormInput } from '@ds-design-system/ui-components/form-input';

import { Select } from '@ds-design-system/ui-components/select';

interface DemoFormModel {
  identity: {
    firstName: string;
    lastName: string;
    birthDate: Date | null;
  };

  contact: {
    email: string;
  };

  address: {
    street: string;
    city: string;
  };

  preferences: {
    channels: string[];
  };
}

const CHANNEL_ITEMS: LibFormCardItem[] = [
  {
    value: 'email',
    label: 'Email',
    icon: 'libicon-mail',
  },
  {
    value: 'sms',
    label: 'SMS',
    icon: 'libicon-tel',
  },
];

const CITY_ITEMS = [
  {
    value: 'paris',
    label: 'Paris',
  },
  {
    value: 'lyon',
    label: 'Lyon',
  },
  {
    value: 'marseille',
    label: 'Marseille',
  },
  {
    value: 'bordeaux',
    label: 'Bordeaux',
  },
];


@Component({
  selector: 'story-form-stepper-host',
  standalone: true,

  imports: [
    StepperContainer,
    StepperQuicknav,
    Onboarding,
    StepperSummary,
    StepperSection,
    StepperStep,
    StepperControl,

    FormField,
    FormInput,
    LibFormCheckboxCard,
    Select,
    Datepicker,

    JsonPipe,
  ],

  providers: [
    {
      provide: LIB_FORM_STEPPER_CONFIG,
      useValue: LIB_FORM_STEPPER_DEFAULT_CONFIG,
    },
  ],

  template: `
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
        padding: 2rem;
        box-sizing: border-box;
      "
    >
      <lib-form-stepper-container
        [libFormStepperNoSubmitButton]="false"
        [libFormStepperDisabled]="isSubmitting()"
      >

        <ng-template
          libFormStepperOnboarding
          libFormStepperOnboardingTitle="Bienvenue"
          libFormStepperOnboardingIcon="libicon-vague"
          libFormStepperOnboardingPath="bienvenue"
        >
          <h2>Créons votre profil</h2>

          <p>
            Ce petit formulaire prend environ 2 minutes.
          </p>
        </ng-template>

        <div
          libFormStepperSection
          [libFormStepperSectionField]="demoForm.identity"
          libFormStepperTitle="Identité"
          libFormStepperIcon="libicon-compte"
        >

          <!-- Prénom -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.identity.firstName"
            libFormStepperTitle="Prénom"
            libFormStepperShortTitle="Prénom"
            libFormStepperPath="prenom"
          >
            <lib-form-input
              libFormStepperControl
              [formField]="demoForm.identity.firstName"
              label="Prénom"
            />
          </ng-template>

          <!-- Nom -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.identity.lastName"
            libFormStepperTitle="Nom"
            libFormStepperShortTitle="Nom"
            libFormStepperPath="nom"
          >
            <lib-form-input
              libFormStepperControl
              [formField]="demoForm.identity.lastName"
              label="Nom"
            />
          </ng-template>

          <!-- Date de naissance -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.identity.birthDate"
            libFormStepperTitle="Date de naissance"
            libFormStepperShortTitle="Naissance"
            libFormStepperPath="naissance"
          >
            <lib-form-datepicker
              libFormStepperControl
              [formField]="demoForm.identity.birthDate"
              label="Date de naissance"
            />
          </ng-template>

        </div>

        <div
          libFormStepperSection
          [libFormStepperSectionField]="demoForm.contact"
          libFormStepperTitle="Contact"
          libFormStepperIcon="libicon-mail"
        >

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.contact.email"
            libFormStepperTitle="Adresse email"
            libFormStepperShortTitle="Email"
            libFormStepperPath="email"
          >
            <lib-form-input
              libFormStepperControl
              type="email"
              [formField]="demoForm.contact.email"
              label="Adresse email"
            />
          </ng-template>

        </div>

        <div
          libFormStepperSection
          [libFormStepperSectionField]="demoForm.address"
          libFormStepperTitle="Adresse"
          libFormStepperIcon="libicon-pin-geoloc"
        >

          <!-- Rue -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.address.street"
            libFormStepperTitle="Rue"
            libFormStepperShortTitle="Rue"
            libFormStepperPath="rue"
          >
            <lib-form-input
              libFormStepperControl
              [formField]="demoForm.address.street"
              label="Rue"
            />
          </ng-template>

          <!-- Ville -->

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.address.city"
            libFormStepperTitle="Ville"
            libFormStepperShortTitle="Ville"
            libFormStepperPath="ville"
          >
            <lib-form-select
              libFormStepperControl
              [formField]="demoForm.address.city"
              [items]="cityItems"
              label="Ville"
            />
          </ng-template>

        </div>

        <div
          libFormStepperSection
          [libFormStepperSectionField]="demoForm.preferences"
          libFormStepperTitle="Préférences"
          libFormStepperIcon="libicon-parametres"
        >

          <ng-template
            libFormStepperStep
            [libFormStepperStepField]="demoForm.preferences.channels"
            libFormStepperTitle="Canaux de notification"
            libFormStepperShortTitle="Notifications"
            libFormStepperPath="notifications"
          >
            <lib-form-checkbox-card
              libFormStepperControl
              [formField]="demoForm.preferences.channels"
              [items]="channelItems"
              label="Comment souhaitez-vous être notifié ?"
            />
          </ng-template>

        </div>

        <ng-template
          libFormStepperSummary
          libFormStepperSummaryTitle="Récapitulatif"
          libFormStepperSummaryIcon="libicon-check"
          libFormStepperSummaryPath="recapitulatif"
        >
          <h2>Vérifiez vos informations</h2>

          <lib-form-stepper-quicknav
            [libFormStepperCompact]="false"
          />
        </ng-template>

      </lib-form-stepper-container>

      <div
        style="
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 13px;
          overflow: auto;
        "
      >
        <strong>Form Model Value:</strong>

        <pre style="margin: 8px 0 0 0;">{{
          model() | json
        }}</pre>
      </div>
    </div>
  `,
})
class FormStepperHostComponent {
  readonly channelItems = CHANNEL_ITEMS;

  readonly cityItems = CITY_ITEMS;

  readonly model = signal<DemoFormModel>({
    identity: {
      firstName: '',
      lastName: '',
      birthDate: null,
    },

    contact: {
      email: '',
    },

    address: {
      street: '',
      city: '',
    },

    preferences: {
      channels: [],
    },
  });

  readonly demoForm = form(
    this.model,
    (path) => {
      required(path.identity.firstName);

      required(path.identity.lastName);

      required(path.contact.email);

      email(path.contact.email);

      required(path.address.street);

      required(path.address.city);
    },
  );

  readonly isSubmitting = signal(false);
}

const meta: Meta<StepperContainer> = {
  title: 'Forms/Stepper',

  component: StepperContainer,

  tags: ['autodocs'],

  decorators: [
    moduleMetadata({
      imports: [
        FormStepperHostComponent,
      ],
    }),
  ],

  parameters: {
    docs: {
      description: {
        component:
          'Stepper multi-étapes intégrant les contrôles du Design System ' +
          'avec Angular Signal Forms. La démonstration contient les étapes ' +
          'Identité, Contact, Adresse, Préférences et Récapitulatif.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StepperContainer>;

export const Default: Story = {
  render: () => ({
    template: `
      <story-form-stepper-host />
    `,
  }),

  parameters: {
    docs: {
      description: {
        story:
          'Exemple complet d’un parcours multi-étapes utilisant Signal Forms.',
      },

      source: {
        type: 'code',
        language: 'html',

        code: `
<lib-form-stepper-container
  [libFormStepperNoSubmitButton]="false"
  [libFormStepperDisabled]="isSubmitting()">

  <ng-template
    libFormStepperOnboarding
    libFormStepperOnboardingTitle="Bienvenue"
    libFormStepperOnboardingIcon="libicon-vague"
    libFormStepperOnboardingPath="bienvenue">

    <h2>Créons votre profil</h2>

    <p>
      Ce petit formulaire prend environ 2 minutes.
    </p>
  </ng-template>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.identity"
    libFormStepperTitle="Identité"
    libFormStepperIcon="libicon-compte">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.identity.firstName"
      libFormStepperTitle="Prénom"
      libFormStepperShortTitle="Prénom"
      libFormStepperPath="prenom">

      <lib-form-input
        libFormStepperControl
        [formField]="demoForm.identity.firstName"
        label="Prénom">
      </lib-form-input>

    </ng-template>

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.identity.lastName"
      libFormStepperTitle="Nom"
      libFormStepperShortTitle="Nom"
      libFormStepperPath="nom">

      <lib-form-input
        libFormStepperControl
        [formField]="demoForm.identity.lastName"
        label="Nom">
      </lib-form-input>

    </ng-template>

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.identity.birthDate"
      libFormStepperTitle="Date de naissance"
      libFormStepperShortTitle="Naissance"
      libFormStepperPath="naissance">

      <lib-form-datepicker
        libFormStepperControl
        [formField]="demoForm.identity.birthDate"
        label="Date de naissance">
      </lib-form-datepicker>

    </ng-template>

  </div>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.contact"
    libFormStepperTitle="Contact"
    libFormStepperIcon="libicon-mail">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.contact.email"
      libFormStepperTitle="Adresse email"
      libFormStepperShortTitle="Email"
      libFormStepperPath="email">

      <lib-form-input
        libFormStepperControl
        type="email"
        [formField]="demoForm.contact.email"
        label="Adresse email">
      </lib-form-input>

    </ng-template>

  </div>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.address"
    libFormStepperTitle="Adresse"
    libFormStepperIcon="libicon-pin-geoloc">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.address.street"
      libFormStepperTitle="Rue"
      libFormStepperShortTitle="Rue"
      libFormStepperPath="rue">

      <lib-form-input
        libFormStepperControl
        [formField]="demoForm.address.street"
        label="Rue">
      </lib-form-input>

    </ng-template>

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.address.city"
      libFormStepperTitle="Ville"
      libFormStepperShortTitle="Ville"
      libFormStepperPath="ville">

      <lib-form-select
        libFormStepperControl
        [formField]="demoForm.address.city"
        [items]="cityItems"
        label="Ville">
      </lib-form-select>

    </ng-template>

  </div>

  <div
    libFormStepperSection
    [libFormStepperSectionField]="demoForm.preferences"
    libFormStepperTitle="Préférences"
    libFormStepperIcon="libicon-parametres">

    <ng-template
      libFormStepperStep
      [libFormStepperStepField]="demoForm.preferences.channels"
      libFormStepperTitle="Canaux de notification"
      libFormStepperShortTitle="Notifications"
      libFormStepperPath="notifications">

      <lib-form-checkbox-card
        libFormStepperControl
        [formField]="demoForm.preferences.channels"
        [items]="channelItems"
        label="Comment souhaitez-vous être notifié ?">
      </lib-form-checkbox-card>

    </ng-template>

  </div>

  <ng-template
    libFormStepperSummary
    libFormStepperSummaryTitle="Récapitulatif"
    libFormStepperSummaryIcon="libicon-check"
    libFormStepperSummaryPath="recapitulatif">

    <h2>Vérifiez vos informations</h2>

    <lib-form-stepper-quicknav
      [libFormStepperCompact]="false">
    </lib-form-stepper-quicknav>

  </ng-template>

</lib-form-stepper-container>
        `.trim(),
      },
    },
  },
};