import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
        <h1>New Event </h1>
        <hr>
        <div>
            <h3>[Create Event Form will go here]</h3>
            <br/>
            <br/>
            <button type='submit' class='btn btn-primary'>Save</button>
            <button (click)="cancel()" type='button' class='btn btn-default'>Cancel</button>
        </div>
    `
})
export class CreateEventsComponent
{
    constructor(private router: Router)
    {

    }

    cancel()
    {
        //navigates back to the home page when canceling a create event form
        this.router.navigate(['/events']);
    }
}