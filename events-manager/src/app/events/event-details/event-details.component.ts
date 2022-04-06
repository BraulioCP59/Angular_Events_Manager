import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
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
    filterBy: string = 'all';
    sortBy: string = 'votes';


    constructor(private eventService: EventService, private route: ActivatedRoute)
    {

    }

    ngOnInit()
    {
        this.route.params.forEach((params:Params) => {
            //the below sets the state and the resets state if add mode endabled to acheived 
            //the desired result when landing on the next event details page
            //it may be better to create a reset state function that can handle acheiving this state
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;

        })
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

    cancelAddSession()
    {
        this.addMode = false;
    }

}