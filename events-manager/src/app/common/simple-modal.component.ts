import { Component, ElementRef,Input, ViewChild, Inject} from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";


@Component({
    selector: 'simple-modal',
    template: `
        <div id="simple-modal" #modalContainer class="modal fade" tabindex="-1">
            <div class="modal-dialogue">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"> <span>&times;</span></button>
                        <h4 class="modal-title">{{title}}</h4>
                    </div>
                    <div class="modal-body" (click)="closeModal()">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .modal-body {height:250px; overflow-y:scroll;}
    `],
})
export class SimpleModalComponent
{
    @Input() title:string; 
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalContainer') containerEl: ElementRef;// this obj will be init with this component to point to the dom node refernced

    constructor(@Inject(JQ_TOKEN) private $:any)
    {

    }

    closeModal()
    {
        if(this.closeOnBodyClick.toLocaleLowerCase() === "true")
        {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}