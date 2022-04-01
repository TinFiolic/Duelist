import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  lostComfort = [
    {
      url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Duelist%20-%20Lost%20Comfort.mp3",
      title: "Lost Comfort",
      cover: ""
    }
  ];

  fallen = [
    {
      url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Fallen.mp3",
      title: "Fallen",
      cover: ""
    }
  ];

  soulHole = [
    {
      url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Soul%20Hole.mp3",
      title: "Soul Hole",
      cover: ""
    }
  ];
}
