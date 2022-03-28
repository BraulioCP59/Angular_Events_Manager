import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
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
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})
export class EventsListComponent implements OnInit
{
  events:any[] = []

  constructor(private eventService: EventService, private toastrService: ToastrService)
  {
  }
  
  ngOnInit()
  {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName:string)
  {
    this.toastrService.success(eventName);
  }
}