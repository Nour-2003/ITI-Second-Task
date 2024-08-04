import { Component, Input } from "@angular/core";

@Component({
  selector: "app-skillscomponent",
  standalone: true,
  imports: [],
  templateUrl: "./skillscomponent.component.html",
  styleUrl: "./skillscomponent.component.css",
})
export class SkillscomponentComponent {
  @Input() title: string = "";
  @Input() width: number = 0;
}
