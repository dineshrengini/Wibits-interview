import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  private openDropdowns: string | null = null;

  toggleDropdown(dropdownId: string): void {
    if (this.openDropdowns === dropdownId) {
      // If the clicked dropdown is already open, close it
      this.openDropdowns = null;
    } else {
      // Open the clicked dropdown and close the previously open one
      this.openDropdowns = dropdownId;
    }
  }

  isDropdownOpen(dropdownId: string): boolean {
    return this.openDropdowns === dropdownId;
  }
}
