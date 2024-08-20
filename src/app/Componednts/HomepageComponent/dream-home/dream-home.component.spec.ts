import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamHomeComponent } from './dream-home.component';

describe('DreamHomeComponent', () => {
  let component: DreamHomeComponent;
  let fixture: ComponentFixture<DreamHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DreamHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreamHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
