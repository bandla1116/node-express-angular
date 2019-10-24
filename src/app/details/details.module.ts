import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { routes } from './details.route';
import { ApiService } from '../core/api.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ DetailsComponent ],
  providers: [ApiService]
})
export class DetailsModule {}