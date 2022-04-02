import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentPage: string = "discography";
  pageList: string[] = ["discography", "streaming", "download", "biography", "contact"];
  
  constructor() { }

  ngOnInit(): void {
    this.startUpAnimation();
  }

  startUpAnimation() {
    var logo = document.getElementById("introLogo");
    var body = document.getElementById("mainBody");
    var menuItem = document.getElementById("discography");

    //TODO DELETE
    //logo.style.display = "none";
    body.style.display = "none";

    menuItem.classList.add("selected");

    setTimeout(function() {
      logo.style.display = "none";
      body.style.display = "block";
    }, 2500);
  }

  changePage(id: string) {
    for(let page of this.pageList) {
      document.getElementById(page).classList.remove("selected");
    }

    document.getElementById(id).classList.add("selected");
    this.currentPage = id;
  }

}
