import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FridayComponent } from './friday/friday.component';
import { MondayComponent } from './monday/monday.component';
import { OfferComponent } from './offer.component';
import { OneComponent } from './one/one.component';

const routes: Routes = [{ path: '', component: OfferComponent },
{path:"friday",component:FridayComponent},{path:"monday",component:MondayComponent},{path:"one",component:OneComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }

