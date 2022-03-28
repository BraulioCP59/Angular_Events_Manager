import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    //no selector needed for this becuase it is not a child component, this is a page
    //will be loaded directly using the url below by the router
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-right: 20px; }
        .event-image {height: 100px; }
    `],
})
export class EventDetails
{
    event:any

    constructor(private eventService: EventService, private route: ActivatedRoute)
    {

    }

    ngOnInit()
    {
     this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])   
    }
}