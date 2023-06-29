import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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

const routes: Routes = [
  { component: ProfileComponent, path: '', pathMatch: 'full',}, 
  { component: ComponentsComponent, path: 'component' },
  { component: TempSyntxComponent, path: 'tempSyntx' },
  { component: DirectivesComponent, path: 'directive' },
  { component: CompstylingComponent, path: 'componentStyling' },
  { component: CompInteractionComponent, path: 'componentInteractions' },
  { component: LifecycleHooksComponent, path: 'lifeCycleHooks' },
  { component: ServicesComponent, path: 'services' },
  { component: ObsrvblComponent, path: 'observables' },
  { component: HttpclientsComponent, path: 'httpClients' },
  { component: FormsComponent, path: 'forms' },
  { component: RoutingsComponent, path: 'routings' },
  { component: AnimationsComponent, path: 'animations' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
