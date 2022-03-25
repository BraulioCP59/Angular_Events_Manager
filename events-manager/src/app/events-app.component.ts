import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  <img src="/assets/images/basic-shield.png"/>
  `,
  styles: []
})
export class EventsAppComponent {
  title = 'events-manager';
}
