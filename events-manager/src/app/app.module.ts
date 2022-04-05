import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CreateEventsComponent,
  EventDetails,
  EventRouteActivator,
  EventListResolver,
  EventsListComponent,
  EventThumbnail,
  EventService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
} from './events/index'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

declare let toastr: Toastr;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnail,
    NavBarComponent,
    EventDetails,
    CreateEventsComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) //imports our routes into the app
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver,
    AuthService,
  ],
  bootstrap: [
    EventsAppComponent,
  ]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventsComponent)
{
  if(component.isDirty)
  {
      return window.confirm('You have not saves this event, do you really want to cancel?');
  }
  return true;

}
