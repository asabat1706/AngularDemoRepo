import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringTokenComponent } from './string-token.component';

describe('StringTokenComponent', () => {
  let component: StringTokenComponent;
  let fixture: ComponentFixture<StringTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringTokenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StringTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
