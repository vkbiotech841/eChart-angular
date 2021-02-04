import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargraphMultipleComponent } from './bargraph-multiple.component';

describe('BargraphMultipleComponent', () => {
  let component: BargraphMultipleComponent;
  let fixture: ComponentFixture<BargraphMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargraphMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BargraphMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
