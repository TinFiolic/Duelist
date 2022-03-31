import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startUpAnimation();
  }

  startUpAnimation() {
    var logo = document.getElementById("logo");
    logo.classList.add("redGlow");

    setTimeout(function() {
      logo.classList.remove("redGlow");
      logo.classList.remove("initialLogo");
      logo.style.display = "none";
    }, 2100);
  }

}
