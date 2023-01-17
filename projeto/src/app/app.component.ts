import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
  `,
  styles: []
})
export class AppComponent {
  title = 'projeto';
}
