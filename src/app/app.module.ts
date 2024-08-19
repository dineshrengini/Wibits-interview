import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './Componednts/HomepageComponent/header-section/header-section.component';
import { HomepageComponent } from './Componednts/HomepageComponent/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    HomepageComponent
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
