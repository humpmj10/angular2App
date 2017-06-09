import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar-component'
import { EventService } from './events/shared/event-service'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/shared/create-event.component'
import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent
    ],
    providers: [EventService],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }