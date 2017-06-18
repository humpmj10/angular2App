import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
    EventThumbnailComponent,
    EventsListComponent,
    EventService,
    EventRouteActivator,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent
} from './events/index'
import { AuthService } from './user/auth.service'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar-component'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
        CreateSessionComponent
    ],
    providers: [
        EventService,
        EventRouteActivator,
        EventListResolver,
        AuthService,
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