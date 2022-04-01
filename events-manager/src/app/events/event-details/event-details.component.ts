import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from "../shared/index";

@Component({
    //no selector needed for this becuase it is not a child component, this is a page
    //will be loaded directly using the url below by the router
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-right: 20px; }
        .event-image {height: 100px; }
        a {cursor: pointer}
    `],
})
export class EventDetails
{
    event:IEvent = {} as IEvent
    addMode:boolean = false

    constructor(private eventService: EventService, private route: ActivatedRoute)
    {

    }

    ngOnInit()
    {
     this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])   
    }

    addSession()
    {
        this.addMode = true;
    }

    saveNewSession(session:ISession)
    {
        const nextId = Math.max.apply(null, this.event.sessions.map((session) => session.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

}