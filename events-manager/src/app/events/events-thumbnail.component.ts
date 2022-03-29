import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "./shared/index";


@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div>Time: {{event?.time}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
            <span *ngSwitchDefault="'8:00 am'">Nomal Start</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div> 
        <div [hidden]="!event?.onlineUrl">
        Online Url: {{event?.onlineUrl}}
        </div>    
    </div>`,
    styles: [`
        .green {color: #003300 !important;}
        .bold {font-weight: bold}
        .thumbnail {min-height: 240px;}
        .pad-left {margin-left:10px;}
        .well div {color: #bbb}
    `]
})
export class EventThumbnail
{
    @Input()event:IEvent = {} as IEvent
    getStartTimeClass()
    {
        if(this.event && this.event.time === '8:00 am')
        {
            return ['green','bold'];
        }
        return '';
    }


}