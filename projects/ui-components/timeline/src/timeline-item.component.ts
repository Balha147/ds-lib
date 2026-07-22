import {
  Component,
  TemplateRef,
  input,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'lib-timeline-item',
  template: `
    <ng-template>
      <div>
        <ng-content />
      </div>
    </ng-template>
  `,
})
export class TimelineItem {

  readonly icon = input<string>();

  readonly template = viewChild.required(TemplateRef<void>);
}