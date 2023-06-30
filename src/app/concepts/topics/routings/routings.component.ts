import { Component } from '@angular/core';

@Component({
  selector: 'app-routings',
  templateUrl: './routings.component.html',
  styleUrls: ['./routings.component.scss']
})
export class RoutingsComponent {
  routingHeading = [
    { "topicName": "Router Module" },
    { "topicName": "Configuring Routes" },
    { "topicName": "Router Outlets" },
    { "topicName": "Router Link" },
    { "topicName": "Wildcard Routes" },
    { "topicName": "Redirecting Routes" },
    { "topicName": "Route Parameters" },
    { "topicName": "Nested Routes" },
    { "topicName": "Relative Paths" },
    { "topicName": "Lazy Loading Routes" },
    { "topicName": "Route Guards" },
  ]
}
