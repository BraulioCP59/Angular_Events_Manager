import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "./shared/event.service";

declare let toastr:any

@Component({
    //no selector needed for this becuase it is not a child component, this is a page
    //will be loaded directly using the url below by the router
    template: `
        <div>
            <h1> Upcoming Angular Events </h1>
            <hr>
            <div class="row">
                <div class="col-md-5" *ngFor="let event of events">
                    <event-thumbnail  [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})
export class EventsListComponent implements OnInit
{
  events:any

  constructor(private eventService: EventService, private route: ActivatedRoute)
  {
  }
  
  ngOnInit()
  {
    this.events = this.route.snapshot.data['events'];

    // we no longer need to do this becuase the data is now added to the route
    //via the events-list-resolver
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events;
    // })
  }

}