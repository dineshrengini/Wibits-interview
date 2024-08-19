import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './Componednts/HomepageComponent/header-section/header-section.component';
import { HomepageComponent } from './Componednts/HomepageComponent/homepage/homepage.component';
import { NavBarComponent } from './Componednts/HomepageComponent/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    HomepageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
