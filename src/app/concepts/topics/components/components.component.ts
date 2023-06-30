import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  componentHeading = [
    {"topicName": "Class"},
    {"topicName":"Template"},
    {"topicName": "Metadata"},
  ];
}
