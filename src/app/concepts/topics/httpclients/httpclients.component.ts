import { Component } from '@angular/core';

@Component({
  selector: 'app-httpclients',
  templateUrl: './httpclients.component.html',
  styleUrls: ['./httpclients.component.scss']
})
export class HttpclientsComponent {
  httpClientHeading = [
    { "topicName": "HTTP Clients" },
    { "topicName": "Request Methods" },
    { "topicName": "Typed Response" },
    { "topicName": "Error Handling" },
    { "topicName": "Interceptors" },
  ]
}
