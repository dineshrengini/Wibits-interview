import { Component } from '@angular/core';

@Component({
  selector: 'app-dream-home',
  templateUrl: './dream-home.component.html',
  styleUrls: ['./dream-home.component.css']
})
export class DreamHomeComponent {
  currentTab: string = 'rent';
  types = ['All Types', 'Apartment', 'Villa'];
  cities = ['All Cities', 'City 1', 'City 2'];
  areas = ['All Areas', 'Area 1', 'Area 2'];
  bedrooms = ['01', '02', '03'];
  baths = ['01', '02', '03'];

  switchTab(tab: string) {
    this.currentTab = tab;
  }
}
