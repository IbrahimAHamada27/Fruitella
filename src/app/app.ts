import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToastContainerComponent } from './shared/components/toast/toast.component';
import { FulfillmentBannerComponent } from './shared/components/fulfillment-banner/fulfillment-banner.component';
import { FloatingCartBarComponent } from './shared/components/floating-cart-bar/floating-cart-bar.component';
import { FulfillmentService } from './core/services/fulfillment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    ToastContainerComponent,
    FulfillmentBannerComponent,
    FloatingCartBarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private router = inject(Router);
  private fulfillmentService = inject(FulfillmentService);

  ngOnInit(): void {
    // Listen to route navigation to capture QR table parameters (?table=12&area=indoor)
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkUrlForTableContext();
      });

    // Initial check on load
    this.checkUrlForTableContext();
  }

  private checkUrlForTableContext(): void {
    const urlTree = this.router.parseUrl(this.router.url);
    const tableParam = urlTree.queryParams['table'];

    if (tableParam) {
      this.fulfillmentService.processUrlContext(tableParam);
    }
  }
}
