import { Component, Input, OnInit } from '@angular/core';

declare const lostComfortLyrics: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  /*
  DOCS
  https://webplatform.github.io/docs/dom/HTMLAudioElement/
  */

  @Input() name = '';
  @Input() link = '';

  element : any;
  slider : any;
  volume : any;

  muted : boolean = false;
  paused : boolean = true;

  currentTime : number = 0;
  duration : number = 0;

  currentLyric : string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.element = document.getElementById("song");
    this.slider = document.getElementById("range");
    this.volume = document.getElementById("volume");

    this.duration = 0;
    this.element.volume = 1.0;
    this.element.pause();

    this.updateSlider();
  }

  updateSlider() {
    if(!this.paused) {
      this.currentTime = this.element.currentTime;
      this.duration = this.element.duration;
      this.lyrics(this.currentTime);
      if(this.element.ended) {
        this.paused = true;
        this.currentTime = 0;
        this.currentLyric = "";
        return;
      }
      setTimeout(() => { this.updateSlider() }, 1000 * 1);
    }
  }

  muteVolume() {
    if(this.element.muted) {
      this.muted = false;
      this.element.muted = false;
    } else {
      this.muted = true;
      this.element.muted = true;
    }
  }

  playPause() {
    if(this.element.paused) {
      this.paused = false;
      this.element.play();
      this.updateSlider();
      document.title = "Duelist - " + this.name;
    } else {
      this.paused = true;
      this.element.pause();
      document.title = "Duelist";
    }
  }

  moveSlider() {
    this.element.currentTime = this.slider.value;
    this.currentTime = this.slider.value;
  }

  moveVolume() {
    this.element.volume = this.volume.value / 100;
  }

  round(number) {
    if(isNaN(Math.round(number)))
      return "--";
    else
      return Math.round(number) < 10 ? '0' + Math.round(number) : Math.round(number);
  }

  floor(number) {
    if(isNaN(Math.floor(number)))
      return "--";
    else
      return Math.floor(number) < 10 ? '0' + Math.floor(number) : Math.floor(number);
  }

  lyrics(time) {
    if(this.name == "Lost Comfort") {
      return this.currentLyric = lostComfortLyrics(time);
    }
  }

}
