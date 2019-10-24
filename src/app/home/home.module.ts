import { ItemRackComponent } from './../item-rack/item-rack.component';
import { ItemListComponent } from './../item-list/item-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.route';
import { TableModule } from '../table';
import { ApiService } from '../core/api.service';

@NgModule({
  declarations: [HomeComponent, ItemListComponent, ItemRackComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    ApiService
  ]
})
export class HomeModule { }
