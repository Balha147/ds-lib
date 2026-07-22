import { Component, HostBinding, inject, input } from '@angular/core';
import { Location } from '@angular/common';
import { Icon } from '@ds-design-system/ui-components/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-link-back',
  templateUrl: './link-back.html',
  styleUrl: './link-back.scss',
  imports: [Icon]
})
export class LinkBack {
  label = input<string>('Retour');

  @HostBinding('class.lib-link-back') protected hasCss = true;

  private location = inject(Location);

  private readonly router = inject(Router);

  readonly fallbackUrl = input<string>('/');

  protected back() {
    if (window.history.length <= 1) {
      this.router.navigateByUrl(this.fallbackUrl());
    } else {
      this.location.back();
    }
  }
}
