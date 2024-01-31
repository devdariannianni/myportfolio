import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmeComponent } from './abme.component';

describe('AbmeComponent', () => {
  let component: AbmeComponent;
  let fixture: ComponentFixture<AbmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
