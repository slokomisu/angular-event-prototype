import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {EventService} from './event.service';
import {FacebookEvent} from './facebookEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService]
})
export class AppComponent {
  user: Observable<firebase.User>;
  events: FacebookEvent[];



  constructor(private afAuth: AngularFireAuth, private eventService: EventService) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(result => {
        localStorage.setItem('access_token', result.credential.accessToken);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getEvents() {
    this.eventService.getUserEvents()
      .then(events => this.events = events);
  }

  getUser() {
  }




}
