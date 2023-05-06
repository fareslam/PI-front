import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdgsComponent } from './sdgs.component';

describe('SdgsComponent', () => {
  let component: SdgsComponent;
  let fixture: ComponentFixture<SdgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
