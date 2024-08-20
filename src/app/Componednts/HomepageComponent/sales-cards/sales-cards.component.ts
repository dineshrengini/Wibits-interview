import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-cards',
  templateUrl: './sales-cards.component.html',
  styleUrl: './sales-cards.component.css'
})
export class SalesCardsComponent {
  properties = [
    {
      imageUrl: '../../../../assets/Homepage-images/oman-img.jpeg',
      title: 'Al Mir Building – Showroom For Rent',
      price: 'OMR 1,500 /per month'
    },
    {
      imageUrl: '../../../../assets/Homepage-images/oman-img.jpeg',
      title: 'Al Mir Building – Showroom For Rent',
      price: 'OMR 1,500 /per month'
    },
    {
      imageUrl: '../../../../assets/Homepage-images/oman-img.jpeg',
      title: 'Al Mir Building – Showroom For Rent',
      price: 'OMR 1,500 /per month'
    },
  ];
}
