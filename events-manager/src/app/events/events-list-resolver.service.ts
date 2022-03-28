import { Injectable } from "@angular/core";
import {Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";
import { map } from "rxjs";

@Injectable()
export class EventListResolver implements Resolve<any>
{
    constructor(private eventService: EventService)
    {

    }
    
    resolve() {
        return this.eventService.getEvents().pipe(map(events => events));
    }
}