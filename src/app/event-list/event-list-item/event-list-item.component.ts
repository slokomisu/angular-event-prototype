import {Component, Input, OnInit} from '@angular/core';
import {FacebookEvent} from '../../facebookEvent';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})
export class EventListItemComponent implements OnInit {
  @Input() event: FacebookEvent;

  constructor() { }

  ngOnInit() {
  }

}
