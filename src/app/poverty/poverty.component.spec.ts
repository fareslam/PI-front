import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PovertyComponent } from './poverty.component';

describe('PovertyComponent', () => {
  let component: PovertyComponent;
  let fixture: ComponentFixture<PovertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PovertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PovertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
