import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class EventsAppComponent {
  title = 'events-manager';
}
