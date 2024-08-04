import { Component } from '@angular/core';
import { SkillscomponentComponent } from "../skillscomponent/skillscomponent.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillscomponentComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
