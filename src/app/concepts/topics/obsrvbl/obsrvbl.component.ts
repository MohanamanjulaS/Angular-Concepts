import { Component } from '@angular/core';

@Component({
  selector: 'app-obsrvbl',
  templateUrl: './obsrvbl.component.html',
  styleUrls: ['./obsrvbl.component.scss']
})
export class ObsrvblComponent {
  observableHeading = [
    { "topicName": "Creating Observables" },
    { "topicName": "Subscribing to Observables" },
    { "topicName": "Executing Observables" },
    { "topicName": "Disposing Observables" },
    { "topicName": "Operators" },
  ]
}
