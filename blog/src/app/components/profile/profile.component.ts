import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { Event } from '../../event';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  limits = 10;
  constructor(private event: RestService) {}
  columns = [
    'ID',
    'Name',
    'Description',
    'Company',
    'Website',
    'Phone',
    'Email',
    'Language',
    'Start',
    'End',
  ];
  index = [
    'eventId',
    'eventName',
    'eventDescription',
    'companyName',
    'website',
    'contactPhone',
    'contactEmail',
    'defaultLanguage',
    'startDate',
    'endDate',
  ];
  events: Event[] = [];
  ngOnInit(): void {
    this.event.getEvent(this.limits).subscribe(
      (response) => {
        this.events = response;
      },
      (error) => {
        console.log('Error Occurs: ' + error);
      }
    );
  }
}
