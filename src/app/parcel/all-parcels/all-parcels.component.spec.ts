import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllParcelsComponent } from './all-parcels.component';

describe('AllParcelsComponent', () => {
  let component: AllParcelsComponent;
  let fixture: ComponentFixture<AllParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllParcelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
