import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  songs: string[] = ["Soul Hole", "Fallen", "Lost Comfort pt.1", "Lost Comfort pt.2", "Ignorance is Decadence"];
  songLinks: string[] = [
    "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Soul%20Hole.mp3",
    "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Fallen.mp3",
    "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort%20intro.mp3",
    "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort.mp3",
    "https://raw.githubusercontent.com/TinFiolic/Duelist/main/ID.mp3"
  ];

  selectedSong: string = "Soul Hole";
  selectedSongIndex: number = 0;

  constructor() { }

  ngOnInit(): void {}

  lostComfort1 = [
    {
      url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort%20intro.mp3",
      title: "Lost Comfort pt.1",
      cover: ""
    }
  ];

  lostComfort2 = [
    {
      url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Lost%20Comfort.mp3",
      title: "Lost Comfort pt.2",
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

  fallen = [
    {
      url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/Fallen.mp3",
      title: "Fallen",
      cover: ""
    }
  ];

  falliden = [
    {
      url: "https://raw.githubusercontent.com/TinFiolic/Duelist/main/ID.mp3",
      title: "Ignorance is Decadence",
      cover: ""
    }
  ];



  switchSong(song, index) {
    this.selectedSong = song;
    this.selectedSongIndex = index; 
  }
}
