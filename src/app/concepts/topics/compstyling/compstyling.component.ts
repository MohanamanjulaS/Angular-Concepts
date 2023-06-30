import { Component } from '@angular/core';

@Component({
  selector: 'app-compstyling',
  templateUrl: './compstyling.component.html',
  styleUrls: ['./compstyling.component.scss']
})
export class CompstylingComponent {
  compStyleHeading = [
    { "topicName": "Class Binding" },
    { "topicName": "Style Binding" },
  ];
}
