import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngMusicPlayerModule } from  'ang-music-player';
import { CommonModule } from  '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AlbumComponent } from './album/album.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AlbumComponent,
    MainComponent,
    IntroComponent,
    FooterComponent
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
