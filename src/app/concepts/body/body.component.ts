import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  selectedIndex: any;
  constructor(public router: Router) { }

  ngOnInit() {
    //window.location.reload();
  }

  menuList = [
    { "topicName": "Components", "icon": "home", "link": "/component" },
    { "topicName": "Template Syntax", "icon": "card_membership", "link": "/tempSyntx" },
    { "topicName": "Directives", "icon": "autorenew", "link": "/directive"},
    { "topicName": "Component Styling", "icon": "extension", "link": "/componentStyling" },
    { "topicName": "Component Interations", "icon": "hourglass_empty", "link": "/componentInteractions" },
    { "topicName": "Life Cycle Methods", "icon": "cached", "link": "/lifeCycleHooks" },
    { "topicName": "Services", "icon": "settings", "link": "/services" },
    { "topicName": "Observables", "icon": "open_with", "link": "/observables" },
    { "topicName": "HTTP Client", "icon": "https", "link": "/httpClients" },
    { "topicName": "Forms", "icon": "assignment", "link": "/forms" },
    { "topicName": "Routing", "icon": "compare_arrows", "link": "/routings" },
    { "topicName": "Animations", "icon": "donut_large", "link": "/animations" },
  ]
}


/*
menuList = [
  {
    id: 1,
    "headingTopic": "Fundamentals",
    "fundTpcs": [
      { "topicName": "Components" },
      { "topicName": "Template Syntax" },
      { "topicName": "Directives" },
      { "topicName": "Component Styling" },
      { "topicName": "Component Interations" },
      { "topicName": "Life Cycle Methods" },
    ],
  },
  {
    id: 2,
    "headingTopic": "Advances",
    "AdvTpcs": [
      { "topicName": "Services" },
      { "topicName": "Observables" },
      { "topicName": "HTTP Client" },
      { "topicName": "Forms" },
      { "topicName": "Routing" },
      { "topicName": "Animations" },
    ],
  }
]*/
