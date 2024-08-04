import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortsectionComponent } from './portsection.component';

describe('PortsectionComponent', () => {
  let component: PortsectionComponent;
  let fixture: ComponentFixture<PortsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
