import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderSectionComponent } from './Componednts/HomepageComponent/header-section/header-section.component';
import { HomepageComponent } from './Componednts/HomepageComponent/homepage/homepage.component';

const routes: Routes = [
  {path:'',component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
