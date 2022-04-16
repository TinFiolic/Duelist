import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  currentMember: string = "band";

  constructor() { }

  ngOnInit(): void {}

  switchImage(name: string) {
    this.currentMember = name;
    this.removeClasses();
    document.getElementById(name).classList.add("selectedMember");
  }

  removeClasses() {
    document.getElementById("band").classList.remove("selectedMember");
    document.getElementById("matija").classList.remove("selectedMember");
    document.getElementById("kristijan").classList.remove("selectedMember");
    document.getElementById("luka").classList.remove("selectedMember");
    document.getElementById("tin").classList.remove("selectedMember");
  }
}
