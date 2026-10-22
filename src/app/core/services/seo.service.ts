import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  private readonly siteName = 'فروتيلا | Fruitella';
  private readonly defaultTitle = 'فروتيلا | Fruitella — غيرنا مفهوم العصير | العبور';
  private readonly defaultDesc = 'فروتيلا (Fruitella) - متجر العصائر الطبيعية الطازجة، السموذي، خلطات الأفوكادو بالمكسرات، والحلويات الفاخرة في مدينة العبور، مول حياة تاون.';
  private readonly defaultLogo = 'https://fruitella-seven.vercel.app/images/brand/fruitella-logo.jpg';
  private readonly baseUrl = 'https://fruitella-seven.vercel.app';

  setDefaultSeo(): void {
    this.updateMeta({
      title: this.defaultTitle,
      description: this.defaultDesc,
      image: this.defaultLogo,
      url: this.baseUrl
    });
  }

  setProductSeo(product: Product): void {
    const fullImageUrl = product.image.startsWith('http') 
      ? product.image 
      : `${this.baseUrl}${product.image}`;
    
    const pageTitle = `${product.nameAr} | ${this.siteName}`;
    const desc = product.descriptionAr 
      ? `${product.descriptionAr} - اطلبه الآن طازجاً من فروتيلا مول حياة تاون العبور.` 
      : `${product.nameAr} - عصير طبيعي طازج ومثلج من فروتيلا مول حياة تاون العبور.`;
    const pageUrl = `${this.baseUrl}/product/${product.slug}`;

    this.updateMeta({
      title: pageTitle,
      description: desc,
      image: fullImageUrl,
      url: pageUrl
    });
  }

  private updateMeta(data: { title: string; description: string; image: string; url: string }): void {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    
    // Open Graph / WhatsApp / Facebook
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: data.image });
    this.meta.updateTag({ property: 'og:image:secure_url', content: data.image });
    this.meta.updateTag({ property: 'og:url', content: data.url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: data.image });
  }
}
