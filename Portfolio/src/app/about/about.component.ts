import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  downloadCV() {
    const link = document.createElement("a");
    link.href = "assets/Nour_Eldin_Hesham_CV.pdf";
    link.download = "Nour_Eldin_Hesham_CV.pdf";
    link.click();
  }
}
