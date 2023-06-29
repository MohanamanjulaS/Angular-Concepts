import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { HeaderComponent } from './concepts/header/header.component';
import { BodyComponent } from './concepts/body/body.component';


import { ProfileComponent } from './concepts/topics/profile/profile.component';
import { ComponentsComponent } from './concepts/topics/components/components.component';
import { TempSyntxComponent } from './concepts/topics/temp-syntx/temp-syntx.component';
import { DirectivesComponent } from './concepts/topics/directives/directives.component';
import { CompstylingComponent } from './concepts/topics/compstyling/compstyling.component';
import { CompInteractionComponent } from './concepts/topics/comp-interaction/comp-interaction.component';
import { LifecycleHooksComponent } from './concepts/topics/lifecycle-hooks/lifecycle-hooks.component';
import { ServicesComponent } from './concepts/topics/services/services.component';
import { ObsrvblComponent } from './concepts/topics/obsrvbl/obsrvbl.component';
import { HttpclientsComponent } from './concepts/topics/httpclients/httpclients.component';
import { FormsComponent } from './concepts/topics/forms/forms.component';
import { RoutingsComponent } from './concepts/topics/routings/routings.component';
import { AnimationsComponent } from './concepts/topics/animations/animations.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ComponentsComponent,
    TempSyntxComponent,
    DirectivesComponent,
    CompstylingComponent,
    CompInteractionComponent,
    LifecycleHooksComponent,
    ServicesComponent,
    ObsrvblComponent,
    HttpclientsComponent,
    FormsComponent,
    RoutingsComponent,
    AnimationsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
