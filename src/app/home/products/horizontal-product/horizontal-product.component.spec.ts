import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalProductComponent } from './horizontal-product.component';

describe('HorizontalProductComponent', () => {
  let component: HorizontalProductComponent;
  let fixture: ComponentFixture<HorizontalProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
