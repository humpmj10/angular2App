import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>{{event?.date}}</div>
            <div>{{event?.time}}</div>
            <div>\${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}} </span>
                <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.locationUrl">
                <span>Online URL: {{event?.locationUrl}}</span>
            </div>
        </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;

}