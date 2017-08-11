import { Injectable } from '@angular/core';
import {FacebookService} from 'ngx-facebook';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import {FacebookEvent} from './facebookEvent';

@Injectable()
export class EventService {

  constructor(private fb: FacebookService) {
    fb.init(environment.initParams);
  }

  async getUserEvents(): Promise<FacebookEvent[]> {
    try {
      const response = await this.fb.api(`/me/events?access_token=${localStorage.getItem('access_token')}`);
      const events = response.data;
      const processedEvents: FacebookEvent[] = [];
      events.forEach(event => {
        const newEvent = new FacebookEvent(event.name, event.description,
            new Date(event.start_time), new Date(event.end_time), event.location);
        processedEvents.push(newEvent);
      });
      return this.filterAndSortCurrentEvents(processedEvents);
    } catch (error) {
      console.log(error);
    }
  }

  private filterAndSortCurrentEvents(events: FacebookEvent[]): FacebookEvent[] {
    return events.filter(event => {
      return event.startTime > new Date(Date.now());
    }).sort((a, b) => {
      return a.startTime.getTime() - b.startTime.getTime();
    });
  }



}
