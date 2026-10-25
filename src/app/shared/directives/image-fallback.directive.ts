import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

export const FRUITELLA_OFFICIAL_LOGO = '/images/brand/fruitella-logo.jpg';

/**
 * Universal directive for guaranteed image fallback to the official Fruitella logo.
 * Prevents infinite error loops and applies clean contain styling with a neutral background.
 */
@Directive({
  selector: 'img[appImageFallback], img[appFallback]',
  standalone: true
})
export class ImageFallbackDirective {
  private el = inject(ElementRef<HTMLImageElement>);
  
  @Input() fallbackSrc: string = FRUITELLA_OFFICIAL_LOGO;
  private hasFailed = false;

  @HostListener('error')
  onError(): void {
    const img = this.el.nativeElement;
    if (this.hasFailed || img.src.endsWith(this.fallbackSrc)) return;
    this.hasFailed = true;

    img.src = this.fallbackSrc;
    img.classList.add('fruitella-logo-fallback');
  }
}
