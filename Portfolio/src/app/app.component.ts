import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortsectionComponent } from "./portsection/portsection.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, SkillsComponent, PortsectionComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
