import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared";


@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
  `]
})
export class CreateEventsComponent
{
    newEvent:any
    isDirty: Boolean = true

    constructor(private router: Router, private eventService: EventService)
    {

    }

    saveEvent(formValues:any)
    {
        this.eventService.saveEvent(formValues);
        console.log(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel()
    {
        //navigates back to the home page when canceling a create event form
        this.router.navigate(['/events']);
    }

}