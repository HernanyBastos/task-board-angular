import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-taks',
  standalone: true,
  imports: [],
  template: `<p>taks works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaksComponent {}
