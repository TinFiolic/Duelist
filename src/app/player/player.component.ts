import { Component, Input, OnInit } from '@angular/core';

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
      if(this.element.ended) {
        this.paused = true;
        this.currentTime = 0;
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
    } else {
      this.paused = true;
      this.element.pause();
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
    return Math.round(number) < 10 ? '0' + Math.round(number) : Math.round(number);
  }

  floor(number) {
    return Math.floor(number) < 10 ? '0' + Math.floor(number) : Math.floor(number);
  }

}
