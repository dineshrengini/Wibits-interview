import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs-card',
  templateUrl: './blogs-card.component.html',
  styleUrl: './blogs-card.component.css'
})
export class BlogsCardComponent {
  blogs = [
    {
      date: 'July 2, 2020',
      title: 'Oil price fall and real estate market',
      text: 'Oil Prices have dropped significantly in the last year. How has the real estate market in Oman reacted and what does the future hold?...',
      imgSrc: '../../../../assets/Homepage-images/blog-img-1.jpeg'
    },
    {
      date: 'July 2, 2020',
      title: 'Oil price fall and real estate market',
      text: 'Oil Prices have dropped significantly in the last year. How has the real estate market in Oman reacted and what does the future hold?...',
      imgSrc: '../../../../assets/Homepage-images/blog-img-2.jpeg'
    },
    {
      date: 'July 2, 2020',
      title: 'Oil price fall and real estate market',
      text: 'Oil Prices have dropped significantly in the last year. How has the real estate market in Oman reacted and what does the future hold?...',
      imgSrc: '../../../../assets/Homepage-images/blog-img-3.jpeg'
    }
  ];
}
