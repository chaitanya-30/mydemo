import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceuseexComponent } from './serviceuseex.component';

describe('ServiceuseexComponent', () => {
  let component: ServiceuseexComponent;
  let fixture: ComponentFixture<ServiceuseexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceuseexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceuseexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
