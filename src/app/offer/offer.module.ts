import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { FridayComponent } from './friday/friday.component';
import { MondayComponent } from './monday/monday.component';
import { OneComponent } from './one/one.component';


@NgModule({
  declarations: [
    OfferComponent,
    FridayComponent,
    MondayComponent,
    OneComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule
  ]
})
export class OfferModule { }
