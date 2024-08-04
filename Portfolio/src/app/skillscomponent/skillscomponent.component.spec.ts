import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillscomponentComponent } from './skillscomponent.component';

describe('SkillscomponentComponent', () => {
  let component: SkillscomponentComponent;
  let fixture: ComponentFixture<SkillscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillscomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
