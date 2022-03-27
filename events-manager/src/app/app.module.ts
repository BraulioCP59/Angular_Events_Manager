import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventDetails } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbnail} from './events/events-thumbnail.component'
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnail,
    NavBarComponent,
    EventDetails,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService,
  ],
  bootstrap: [
    EventsAppComponent,
  ]
})
export class AppModule { }
