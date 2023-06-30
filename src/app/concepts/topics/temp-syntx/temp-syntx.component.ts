import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-syntx',
  templateUrl: './temp-syntx.component.html',
  styleUrls: ['./temp-syntx.component.scss']
})
export class TempSyntxComponent {
  templateHeading = [
    { "topicName": "Interpolation" },
    { "topicName": "Property Binding" },
    { "topicName": "Event Binding" },
    { "topicName": "Two Way Binding" },
    { "topicName": "Pipes" },
    { "topicName": "Template Reference Variable" },
  ];
}
