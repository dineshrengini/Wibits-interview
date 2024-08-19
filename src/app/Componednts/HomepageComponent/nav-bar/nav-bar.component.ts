import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
// Store open states of dropdowns
private openDropdowns: Set<string> = new Set();

// Toggle dropdown state
toggleDropdown(dropdownId: string): void {
  if (this.openDropdowns.has(dropdownId)) {
    this.openDropdowns.delete(dropdownId);
  } else {
    this.openDropdowns.add(dropdownId);
  }
}

// Check if a dropdown is open
isDropdownOpen(dropdownId: string): boolean {
  return this.openDropdowns.has(dropdownId);
}
}
