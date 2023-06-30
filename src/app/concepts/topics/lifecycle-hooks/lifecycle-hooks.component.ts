import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent {
  lifeHookPageHeading = [
    { "topicName": "OnChanges" },
    { "topicName": "OnInit" },
    { "topicName": "DoCheck" },
    { "topicName": "AfterViewInit" },
    { "topicName": "AfterViewChecked" },
    { "topicName": "AfterContentInit" },
    { "topicName": "AfterContentChecked" },
    { "topicName": "OnDestroy" }
  ]
}
