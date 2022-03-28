import { Routes } from "@angular/router"
import { EventsListComponent } from "./events/events-list.component" 
import { EventDetails } from "./events/event-details/event-details.component"
import { CreateEventsComponent } from "./events/create-events.component"
import { Error404Component } from "./errors/404.component"
import { EventRouteActivator } from "./events/event-details/event-route-activator"

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventsComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent }, 
    {path: 'events/:id', component: EventDetails, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
]