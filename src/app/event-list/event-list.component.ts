import {Component, Input, OnInit} from '@angular/core';
import { FacebookEvent } from '../facebookEvent';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() events: FacebookEvent[];

  constructor() { }

  ngOnInit() {
  }

}
