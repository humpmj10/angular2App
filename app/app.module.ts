import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import {
    EventThumbnailComponent,
    EventsListComponent,
    EventService,
    EventRouteActivator,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
} from './events/index'
import {
    LoginComponent
} from './user/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar-component'
import { Error404Component } from './errors/404.component'
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
        Error404Component,
        CreateEventComponent,
        LoginComponent
    ],
    providers: [
        EventService,
        EventRouteActivator,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel');
    }
    return false;
}