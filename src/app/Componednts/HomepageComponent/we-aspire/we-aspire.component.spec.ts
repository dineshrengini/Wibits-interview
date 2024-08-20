import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAspireComponent } from './we-aspire.component';

describe('WeAspireComponent', () => {
  let component: WeAspireComponent;
  let fixture: ComponentFixture<WeAspireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeAspireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeAspireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
