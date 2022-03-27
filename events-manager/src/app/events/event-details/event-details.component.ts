import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
    //no selector needed for this becuase it is not a child component
    //will be loaded directly using the url below
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-right: 20px; }
        .event-image {height: 100px; }
    `],
})
export class EventDetails
{
    event:any

    constructor(private eventService: EventService)
    {

    }

    ngOnInit()
    {
     this.event = this.eventService.getEvent(1)   
    }
}