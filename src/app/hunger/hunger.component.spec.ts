import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HungerComponent } from './hunger.component';

describe('HungerComponent', () => {
  let component: HungerComponent;
  let fixture: ComponentFixture<HungerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HungerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HungerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
