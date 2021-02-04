import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargraphSingleComponent } from './bargraph-single.component';

describe('BargraphSingleComponent', () => {
  let component: BargraphSingleComponent;
  let fixture: ComponentFixture<BargraphSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargraphSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BargraphSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
