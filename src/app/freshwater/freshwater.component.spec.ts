import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshwaterComponent } from './freshwater.component';

describe('FreshwaterComponent', () => {
  let component: FreshwaterComponent;
  let fixture: ComponentFixture<FreshwaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshwaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
