import { WindowModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    HomepageComponent
  ],
  imports:[
 CommonModule,
WindowModule,
 
    
    Routing
  ],
  providers: [],
})
export class AppModule { }
