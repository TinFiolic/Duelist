import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  songs: string[] = ["Lost Comfort", "Fallen", "Soul Hole"];
  songLinks: string[] = [
    "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Duelist%20-%20Lost%20Comfort.mp3",
    "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Fallen.mp3",
    "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Soul%20Hole.mp3"
  ];

  selectedSong: string = "Lost Comfort";
  selectedSongIndex: number = 0;

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

  switchSong(song, index) {
    this.selectedSong = song;
    this.selectedSongIndex = index; 
  }
}
