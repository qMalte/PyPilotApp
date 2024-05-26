import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuderSenseComponent } from './ruder-sense.component';

describe('RuderSenseComponent', () => {
  let component: RuderSenseComponent;
  let fixture: ComponentFixture<RuderSenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuderSenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RuderSenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
