import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-we-aspire',
  templateUrl: './we-aspire.component.html',
  styleUrls: ['./we-aspire.component.css']
})
export class WeAspireComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      const options = {
        root: null,
        threshold: 0.5 
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const heading = this.el.nativeElement.querySelector('.heading h1');
            const subHeadings = this.el.nativeElement.querySelectorAll('.sub-heading');
            const paras = this.el.nativeElement.querySelectorAll('.para');

            if (heading) {
              this.renderer.addClass(heading, 'animate');
            }
            subHeadings.forEach((element: Element) => {
              this.renderer.addClass(element, 'animate');
            });
            paras.forEach((element: Element) => {
              this.renderer.addClass(element, 'animate');
            });
            observer.unobserve(entry.target);
          }
        });
      }, options);
      observer.observe(this.el.nativeElement.querySelector('.container'));
    }
  }
}
