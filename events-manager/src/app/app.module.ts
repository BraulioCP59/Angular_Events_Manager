import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';

import { EventsAppComponent } from './events-app.component';
import { CreateEventsComponent } from './events/create-events.component';
import { EventDetails } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbnail} from './events/events-thumbnail.component'
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnail,
    NavBarComponent,
    EventDetails,
    CreateEventsComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) //imports our routes into the app
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver,
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
