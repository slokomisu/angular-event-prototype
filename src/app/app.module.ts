import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FacebookModule, FacebookService} from 'ngx-facebook';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { EventListComponent } from './event-list/event-list.component';
import {EventService} from './event.service';
import { EventListItemComponent } from './event-list/event-list-item/event-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventListItemComponent,
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AngularFireAuth, EventService, FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
