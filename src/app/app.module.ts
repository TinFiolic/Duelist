import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngMusicPlayerModule } from  'ang-music-player';
import { CommonModule } from  '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AlbumComponent } from './album/album.component';
import { StreamingComponent } from './streaming/streaming.component';
import { PlayerComponent } from './player/player.component';
import { DownloadComponent } from './download/download.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BiographyComponent } from './biography/biography.component';

@NgModule({
  declarations: [
    AlbumComponent,
    MainComponent,
    IntroComponent,
    FooterComponent,
    StreamingComponent,
    DownloadComponent,
    PlayerComponent,
    ContactComponent,
    BiographyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngMusicPlayerModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
