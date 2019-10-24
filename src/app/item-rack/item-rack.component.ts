import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-item-rack',
  templateUrl: './item-rack.component.html',
  styleUrls: ['./item-rack.component.scss']
})
export class ItemRackComponent implements OnInit {
  @Input() product: Product
  @HostBinding('attr.class') cssCLass = 'item'
  constructor() { }

  ngOnInit() {
  }

}
