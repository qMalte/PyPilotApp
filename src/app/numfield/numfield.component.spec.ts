import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumfieldComponent } from './numfield.component';

describe('NumfieldComponent', () => {
  let component: NumfieldComponent;
  let fixture: ComponentFixture<NumfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
