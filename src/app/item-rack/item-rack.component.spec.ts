import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRackComponent } from './item-rack.component';

describe('ItemRackComponent', () => {
  let component: ItemRackComponent;
  let fixture: ComponentFixture<ItemRackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
