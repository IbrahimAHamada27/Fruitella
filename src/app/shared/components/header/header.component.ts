import { Component, NgZone, OnInit, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../../../core/services/config.service';
import { CartService } from '../../../core/services/cart.service';
import { FulfillmentService } from '../../../core/services/fulfillment.service';
import { FulfillmentType } from '../../../core/models/fulfillment.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  template: `
    <!-- Top Announcement & Social Bar (Inspired by Just Juice It) -->
    <aside class="announcement-bar" [class.collapsed]="isScrolled()" role="region" aria-label="شريط الإعلانات والاتصال">
      <div class="container announcement-inner">
        <!-- Socials & Quick Links -->
        <div class="top-social-links">
          <a 
            href="https://wa.me/201037221133" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="top-social-item whatsapp" 
            title="محادثة واتساب مباشرة">
            <i class="fa-brands fa-whatsapp"></i>
            <span class="social-txt">واتساب</span>
          </a>
          <a 
            [href]="business().contacts.googleMapsUrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="top-social-item maps" 
            title="موقعنا على خرائط جوجل">
            <i class="fa-solid fa-location-dot"></i>
            <span class="social-txt">مول حياة تاون</span>
          </a>
          <a 
            [href]="business().contacts.facebookUrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="top-social-item fb" 
            title="صفحة فيسبوك الرسمية">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a 
            [href]="business().contacts.instagramUrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="top-social-item insta" 
            title="حساب إنستغرام الرسمي">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a 
            [href]="business().contacts.tiktokUrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="top-social-item tiktok" 
            title="حساب تيك توك الرسمي">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a 
            [href]="business().contacts.googleReviewsUrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="top-social-item reviews" 
            title="تقييمات فروتيلا على خرائط جوجل">
            <i class="fa-solid fa-star"></i>
            <span class="social-txt">قيّمنا ⭐</span>
          </a>
        </div>

        <!-- Brand Motto & Quality Assurance -->
        <div class="announcement-motto">
          <i class="fa-solid fa-wand-magic-sparkles motto-icon"></i>
          <span>{{ currentAnnouncement }}</span>
        </div>

        <!-- Hotline & Contacts -->
        <div class="announcement-contacts">
          <div class="hotline-box">
            <i class="fa-solid fa-phone-volume"></i>
            <span class="hotline-label">الخط الساخن:</span>
            <a [href]="'tel:' + business().contacts.phone1" class="quick-call">
              {{ business().contacts.phone1 }}
            </a>
          </div>
          <span class="lang-pill">🇪🇬 مصر</span>
        </div>
      </div>
    </aside>

    <!-- Main Navigation Bar -->
    <header class="main-header" [class.scrolled]="isScrolled()">
      <div class="container header-inner">
        <!-- Brand Logo & Bilingual Identity (فروتيلا • Fruitella) -->
        <a routerLink="/" class="brand-link" aria-label="فروتيلا الصفحة الرئيسية - Fruitella">
          <img src="/images/brand/fruitella-logo.jpg" alt="شعار فروتيلا Fruitella" class="brand-logo" />
          <div class="brand-text">
            <div class="brand-names">
              <span class="brand-name-ar">فروتيلا</span>
              <span class="brand-name-en">Fruitella</span>
            </div>
            <span class="brand-tagline">غيرنا مفهوم العصير</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav" aria-label="التنقل الرئيسي">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-item">
            الرئيسية
          </a>
          <a routerLink="/menu" routerLinkActive="active" class="nav-item">
            قائمة المنيو
          </a>
          <a routerLink="/menu/power-fruitella" routerLinkActive="active" class="nav-item">
            باور فروتيلا
          </a>
          <a routerLink="/menu/sweets-desserts" routerLinkActive="active" class="nav-item">
            الحلويات
          </a>
          <a routerLink="/about" routerLinkActive="active" class="nav-item">
            عن فروتيلا
          </a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-item">
            تواصل معنا
          </a>
        </nav>

        <!-- Header Actions: Branch Pill, Search, Cart, Mobile Toggle -->
        <div class="header-actions">
          <!-- Branch / Dining Area Pill (Smoothie Paradise ss-change-branch Inspired) -->
          <a 
            routerLink="/checkout" 
            class="branch-pill" 
            title="طريقة الاستلام وتحديد الطاولة">
            <div class="branch-icon-box">
              @switch (fulfillmentService.activeType()) {
                @case ('table') { <i class="fa-solid fa-chair"></i> }
                @case ('car') { <i class="fa-solid fa-car-side"></i> }
                @case ('takeaway') { <i class="fa-solid fa-bag-shopping"></i> }
                @case ('delivery') { <i class="fa-solid fa-motorcycle"></i> }
              }
            </div>
            <div class="branch-details">
              <span class="b-label">الفرع والاستلام:</span>
              <strong class="b-value">
                @if (fulfillmentService.activeType() === 'table') {
                  @if (fulfillmentService.tableDetails(); as t) {
                    ترابيزة #{{ t.tableNumber }} ({{ t.areaNameAr }})
                  } @else {
                    طلب صالة (حدد الترابيزة)
                  }
                } @else if (fulfillmentService.activeType() === 'car') {
                  خدمة السيارة
                } @else if (fulfillmentService.activeType() === 'takeaway') {
                  استلام تيك أواي
                } @else {
                  دليفري العبور
                }
              </strong>
            </div>
          </a>

          <!-- Search Box -->
          <form class="search-form" (ngSubmit)="onSearchSubmit()">
            <input 
              type="search" 
              name="searchQuery" 
              [(ngModel)]="searchQuery" 
              placeholder="ابحث عن عصير، سموذي، وافل..." 
              class="search-input" />
            <button type="submit" class="search-btn" aria-label="بحث">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <!-- Cart Button with Counter Badge -->
          <a routerLink="/cart" class="cart-trigger" aria-label="سلة المشتريات">
            <i class="fa-solid fa-basket-shopping cart-icon"></i>
            @if (cartCount() > 0) {
              <span class="cart-badge">{{ cartCount() }}</span>
            }
          </a>

          <!-- Mobile Menu Toggle Button -->
          <button 
            type="button" 
            class="mobile-menu-btn" 
            (click)="toggleMobileMenu()" 
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-label="القائمة الجانبية">
            <i [class]="mobileMenuOpen() ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer Overlay (Outside header to prevent clipping) -->
    @if (mobileMenuOpen()) {
      <div class="mobile-drawer-backdrop" (click)="closeMobileMenu()">
        <nav class="mobile-nav-panel" (click)="$event.stopPropagation()">
          <!-- Drawer Brand & Close Header -->
          <div class="drawer-header">
            <div class="drawer-brand">
              <img src="/images/brand/fruitella-logo.jpg" alt="فروتيلا Fruitella" class="drawer-logo" />
              <div class="drawer-brand-text">
                <div class="brand-names">
                  <span class="drawer-title-ar">فروتيلا</span>
                  <span class="drawer-title-en">Fruitella</span>
                </div>
                <span class="drawer-tagline">غيرنا مفهوم العصير</span>
              </div>
            </div>
              <button 
                type="button" 
                class="drawer-close-btn" 
                (click)="closeMobileMenu()" 
                aria-label="إغلاق القائمة">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <!-- Fulfillment Quick Switcher inside Drawer -->
            <div class="drawer-fulfillment-section">
              <span class="df-section-title">
                <i class="fa-solid fa-location-dot"></i> طريقة استلام الطلب:
              </span>
              <div class="df-mode-grid">
                <button 
                  type="button" 
                  class="df-mode-btn" 
                  [class.active]="fulfillmentService.activeType() === 'table'"
                  (click)="setFulfillmentAndClose('table')">
                  <i class="fa-solid fa-chair"></i>
                  <span>صالة</span>
                </button>
                <button 
                  type="button" 
                  class="df-mode-btn" 
                  [class.active]="fulfillmentService.activeType() === 'car'"
                  (click)="setFulfillmentAndClose('car')">
                  <i class="fa-solid fa-car-side"></i>
                  <span>سيارة</span>
                </button>
                <button 
                  type="button" 
                  class="df-mode-btn" 
                  [class.active]="fulfillmentService.activeType() === 'takeaway'"
                  (click)="setFulfillmentAndClose('takeaway')">
                  <i class="fa-solid fa-bag-shopping"></i>
                  <span>تيك أواي</span>
                </button>
                <button 
                  type="button" 
                  class="df-mode-btn" 
                  [class.active]="fulfillmentService.activeType() === 'delivery'"
                  (click)="setFulfillmentAndClose('delivery')">
                  <i class="fa-solid fa-motorcycle"></i>
                  <span>دليفري</span>
                </button>
              </div>
            </div>

            <!-- Mobile Search Form -->
            <form class="mobile-search-form" (ngSubmit)="onSearchSubmit()">
              <input 
                type="search" 
                name="mobileQuery" 
                [(ngModel)]="searchQuery" 
                placeholder="ابحث عن عصير، سموذي، وافل..." 
                class="mobile-search-input" />
              <button type="submit" class="mobile-search-btn" aria-label="بحث">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            <!-- Navigation Links -->
            <div class="drawer-links-list">
              <a routerLink="/" (click)="closeMobileMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="mobile-nav-link">
                <i class="fa-solid fa-house"></i>
                <span>الرئيسية</span>
              </a>
              <a routerLink="/menu" (click)="closeMobileMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="mobile-nav-link">
                <i class="fa-solid fa-book-open"></i>
                <span>قائمة المنيو بالكامل</span>
                <span class="nav-count-badge">300+</span>
              </a>
              <a routerLink="/menu/power-fruitella" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
                <i class="fa-solid fa-bolt"></i>
                <span>باور فروتيلا والأفوكادو</span>
              </a>
              <a routerLink="/menu/sweets-desserts" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
                <i class="fa-solid fa-ice-cream"></i>
                <span>الوافل والحلويات</span>
              </a>
              <a routerLink="/menu/family-packs" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
                <i class="fa-solid fa-bottle-droplet"></i>
                <span>العبوات العائلية (1L & 4L)</span>
              </a>
              <a routerLink="/cart" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
                <i class="fa-solid fa-basket-shopping"></i>
                <span>سلة المشتريات</span>
                @if (cartCount() > 0) {
                  <span class="nav-cart-badge">{{ cartCount() }}</span>
                }
              </a>
              <a routerLink="/about" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
                <i class="fa-solid fa-shop"></i>
                <span>عن فروتيلا وقصتنا</span>
              </a>
              <a routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="active" class="mobile-nav-link">
                <i class="fa-solid fa-location-dot"></i>
                <span>موقعنا ومواعيد العمل</span>
              </a>
            </div>

            <!-- Drawer Bottom Store Contact -->
            <div class="drawer-footer-contact">
              <div class="branch-status-row">
                <span class="live-dot"></span>
                <span>فرع مول حياة تاون — مفتوح حتى 2 ص</span>
              </div>
              <div class="drawer-phone-buttons">
                <a [href]="'tel:' + business().contacts.phone1" class="drawer-phone-link">
                  <i class="fa-solid fa-phone"></i> {{ business().contacts.phone1 }}
                </a>
                <a [href]="'tel:' + business().contacts.phone2" class="drawer-phone-link">
                  <i class="fa-solid fa-phone"></i> {{ business().contacts.phone2 }}
                </a>
              </div>
            </div>
          </nav>
        </div>
      }
  `,
  styles: [`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
    }

    /* Announcement Bar */
    .announcement-bar {
      background: var(--fruitella-green-900);
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.8rem;
      padding-block: 0.45rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      max-height: 48px;
      opacity: 1;
      overflow: hidden;
      transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  opacity 0.25s ease,
                  padding-block 0.3s ease;
    }
    .announcement-bar.collapsed {
      max-height: 0;
      opacity: 0;
      padding-block: 0;
      border-bottom-width: 0;
      pointer-events: none;
    }
    .announcement-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .top-social-links {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .top-social-item {
      color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      font-size: 0.8rem;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: color var(--transition-fast);
    }
    .top-social-item:hover {
      color: var(--fruitella-lime-light);
    }
    .top-social-item.whatsapp i {
      color: #25d366;
    }
    .top-social-item.maps i {
      color: #f87171;
    }
    .top-social-item.fb i {
      color: #60a5fa;
    }
    .top-social-item.insta i {
      color: #f43f5e;
    }
    .top-social-item.tiktok:hover i {
      color: #00f2fe;
    }
    .top-social-item.reviews i {
      color: #fbbf24;
    }
    .top-social-item.reviews:hover {
      color: #fbbf24;
    }
    .social-txt {
      font-size: 0.76rem;
    }
    .announcement-motto {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.82rem;
      color: rgba(255, 255, 255, 0.95);
      font-weight: 600;
    }
    .announcement-motto .motto-icon {
      color: var(--fruitella-lime-light);
    }
    .announcement-contacts {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .hotline-box {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.8rem;
    }
    .hotline-box i {
      color: var(--fruitella-lime-light);
    }
    .hotline-label {
      opacity: 0.8;
      font-size: 0.76rem;
    }
    .quick-call {
      color: var(--fruitella-lime-light);
      font-weight: 800;
      direction: ltr;
      text-decoration: none;
      font-variant-numeric: tabular-nums;
    }
    .lang-pill {
      background: rgba(255, 255, 255, 0.12);
      padding: 0.15rem 0.45rem;
      border-radius: var(--radius-sm);
      font-size: 0.75rem;
    }

    /* Main Header: Antigravity Glassmorphism */
    .main-header {
      position: relative;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      border-bottom: 1px solid rgba(13, 41, 20, 0.08);
      box-shadow: inset 0 -1px 0 rgba(13, 41, 20, 0.04), 0 4px 18px rgba(13, 41, 20, 0.03);
      transition: box-shadow var(--transition-normal);
    }
    .main-header.scrolled {
      box-shadow: inset 0 -1px 0 rgba(13, 41, 20, 0.06), 0 8px 30px rgba(13, 41, 20, 0.08);
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
      gap: 1.25rem;
    }

    /* Brand Logo */
    .brand-link {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      text-decoration: none;
      flex-shrink: 0;
    }
    .brand-logo {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border: 2px solid var(--fruitella-lime);
    }
    .brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
    }
    .brand-names {
      display: flex;
      align-items: baseline;
      gap: 0.35rem;
    }
    .brand-name-ar {
      font-family: var(--font-heading);
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--fruitella-green-800);
      line-height: 1;
      letter-spacing: -0.01em;
    }
    .brand-name-en {
      font-family: 'Alexandria', 'Cairo', system-ui, sans-serif;
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--fruitella-green-600);
      letter-spacing: 0.02em;
    }
    .brand-tagline {
      font-size: 0.68rem;
      font-weight: 600;
      color: var(--fruitella-lime);
      letter-spacing: 0.02em;
      margin-top: 0.1rem;
    }
    .drawer-title-ar {
      font-family: var(--font-heading);
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--fruitella-green-800);
    }
    .drawer-title-en {
      font-family: 'Alexandria', 'Cairo', system-ui, sans-serif;
      font-size: 0.92rem;
      font-weight: 800;
      color: var(--fruitella-green-600);
    }

    /* Desktop Navigation */
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }
    .nav-item {
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--text-primary);
      position: relative;
      padding-block: 0.5rem;
      text-decoration: none;
      transition: color var(--transition-fast);
      white-space: nowrap;
    }
    .nav-item:hover, .nav-item.active {
      color: var(--fruitella-green-700);
    }
    .nav-item.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      right: 0;
      left: 0;
      height: 3px;
      background: var(--fruitella-lime);
      border-radius: var(--radius-full);
    }

    /* Header Actions */
    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    /* Branch / Fulfillment Pill (Smoothie Paradise style) */
    .branch-pill {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.4rem 0.85rem;
      background: #fafbfa;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-full);
      text-decoration: none;
      transition: all var(--transition-fast);
      cursor: pointer;
    }
    .branch-pill:hover {
      border-color: var(--fruitella-lime);
      background: var(--fruitella-lime-bg);
      transform: translateY(-1px);
    }
    .branch-icon-box {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-800);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.82rem;
    }
    .branch-details {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
    }
    .b-label {
      font-size: 0.65rem;
      color: var(--text-muted);
      font-weight: 600;
    }
    .b-value {
      font-size: 0.8rem;
      color: var(--fruitella-green-900);
      font-weight: 700;
      white-space: nowrap;
    }

    /* Search Box */
    .search-form {
      position: relative;
      width: 200px;
    }
    .search-input {
      width: 100%;
      height: 38px;
      padding: 0 2.25rem 0 0.85rem;
      border-radius: var(--radius-full);
      border: 1.5px solid var(--border-subtle);
      background: #f7faf7;
      font-size: 0.85rem;
      outline: none;
      transition: all var(--transition-fast);
    }
    .search-input:focus {
      background: #ffffff;
      border-color: var(--fruitella-green-600);
      width: 240px;
      box-shadow: 0 0 0 3px rgba(118, 164, 34, 0.15);
    }
    .search-btn {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--fruitella-green-600);
      font-size: 0.85rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    /* Cart Trigger */
    .cart-trigger {
      position: relative;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-800));
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      transition: all var(--transition-normal);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 4px 14px rgba(29, 77, 41, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.15);
      text-decoration: none;
      flex-shrink: 0;
      user-select: none;
    }
    .cart-trigger:hover {
      background: linear-gradient(135deg, var(--fruitella-green-600), var(--fruitella-green-700));
      transform: scale(1.08);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45), 0 6px 18px rgba(29, 77, 41, 0.4);
    }
    .cart-trigger:active {
      transform: scale(0.92) !important;
    }
    .cart-badge {
      position: absolute;
      top: -4px;
      left: -4px;
      background: var(--fruitella-mango);
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 800;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #ffffff;
      font-variant-numeric: tabular-nums;
      box-shadow: 0 2px 6px rgba(245, 158, 11, 0.4);
      animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
      display: none;
      width: 40px;
      height: 40px;
      border-radius: var(--radius-sm);
      background: #f1f5f2;
      border: 1.5px solid var(--border-subtle);
      color: var(--fruitella-green-900);
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      cursor: pointer;
      transition: all var(--transition-fast) ease;
    }
    .mobile-menu-btn:hover {
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-900);
    }
    .mobile-menu-btn:active {
      transform: scale(0.93);
    }

    /* Mobile Drawer Fullscreen Overlay & Panel */
    .mobile-drawer-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(13, 41, 20, 0.7);
      z-index: 99999999;
      display: flex;
      justify-content: flex-start;
      animation: drawerFadeIn 0.2s ease-out;
    }

    .mobile-nav-panel {
      background: #ffffff;
      width: 86%;
      max-width: 320px;
      height: 100%;
      padding: 1.25rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      box-shadow: 0 0 35px rgba(0, 0, 0, 0.4);
      animation: drawerSlideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes drawerFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes drawerSlideIn {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }

    .drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 0.85rem;
      border-bottom: 1px solid var(--border-subtle);
    }

    .drawer-brand {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }

    .drawer-logo {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 2px solid var(--fruitella-lime);
      object-fit: cover;
    }

    .drawer-brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
    }

    .drawer-title {
      font-family: var(--font-heading);
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--fruitella-green-800);
    }

    .drawer-tagline {
      font-size: 0.68rem;
      color: var(--text-muted);
      font-weight: 600;
    }

    .drawer-close-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #f1f5f2;
      border: 1px solid var(--border-subtle);
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all var(--transition-fast) ease;
    }

    .drawer-close-btn:hover {
      background: #e2e8e4;
      transform: rotate(90deg);
    }

    .drawer-close-btn:active {
      transform: scale(0.92);
    }

    /* Drawer Fulfillment Switcher Box */
    .drawer-fulfillment-section {
      background: #f4f8f4;
      border-radius: var(--radius-md);
      padding: 0.65rem 0.75rem;
      border: 1px solid rgba(27, 94, 32, 0.1);
    }

    .df-section-title {
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      margin-bottom: 0.45rem;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }

    .df-mode-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.3rem;
    }

    .df-mode-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      padding: 0.45rem 0.2rem;
      background: #ffffff;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      color: var(--text-secondary);
      font-size: 0.68rem;
      font-weight: 700;
      cursor: pointer;
      transition: all var(--transition-fast) ease;
    }

    .df-mode-btn:hover {
      border-color: var(--fruitella-lime);
      color: var(--fruitella-green-900);
    }

    .df-mode-btn.active {
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-800));
      border-color: var(--fruitella-green-800);
      color: #ffffff;
      box-shadow: 0 2px 6px rgba(27, 94, 32, 0.2);
    }

    .mobile-search-form {
      position: relative;
    }
    .mobile-search-input {
      width: 100%;
      height: 42px;
      padding: 0 2.5rem 0 0.85rem;
      border-radius: var(--radius-full);
      border: 1.5px solid var(--border-subtle);
      background: #f7faf7;
      font-size: 0.88rem;
      outline: none;
      transition: all var(--transition-fast);
    }
    .mobile-search-input:focus {
      background: #ffffff;
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 3px rgba(27, 94, 32, 0.12);
    }
    .mobile-search-btn {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--fruitella-green-700);
      background: none;
      border: none;
      font-size: 0.95rem;
    }

    .drawer-links-list {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.7rem 0.85rem;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 0.88rem;
      color: var(--text-primary);
      text-decoration: none;
      transition: all var(--transition-fast);
    }
    .mobile-nav-link i {
      color: var(--fruitella-green-700);
      width: 22px;
      font-size: 1rem;
      text-align: center;
    }
    .mobile-nav-link:hover, .mobile-nav-link.active {
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-900);
    }

    .nav-count-badge {
      margin-right: auto;
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-800);
      font-size: 0.68rem;
      font-weight: 800;
      padding: 0.1rem 0.45rem;
      border-radius: var(--radius-full);
      font-variant-numeric: tabular-nums;
    }

    .nav-cart-badge {
      margin-right: auto;
      background: var(--fruitella-mango);
      color: #ffffff;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 0.1rem 0.45rem;
      border-radius: var(--radius-full);
      font-variant-numeric: tabular-nums;
    }

    .drawer-footer-contact {
      margin-top: auto;
      padding-top: 0.75rem;
      border-top: 1px dashed var(--border-subtle);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .branch-status-row {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.74rem;
      font-weight: 600;
      color: var(--fruitella-green-800);
    }

    .live-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);
      animation: pulse 1.8s infinite;
    }

    .drawer-phone-buttons {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .drawer-phone-link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      border-radius: var(--radius-sm);
      background: #f1f5f2;
      font-weight: 700;
      font-size: 0.82rem;
      color: var(--fruitella-green-800);
      direction: ltr;
      text-decoration: none;
      transition: all var(--transition-fast);
      font-variant-numeric: tabular-nums;
    }

    .drawer-phone-link:hover {
      background: var(--fruitella-lime-bg);
      color: #3b5710;
    }

    @keyframes popIn {
      0% { transform: scale(0); }
      70% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }

    /* Responsive */
    @media (max-width: 1100px) {
      .branch-pill {
        display: none;
      }
    }
    @media (max-width: 992px) {
      .desktop-nav {
        display: none;
      }
      .mobile-menu-btn {
        display: flex;
      }
      .search-form {
        display: none;
      }
      .announcement-promo {
        display: none;
      }
    }
    @media (max-width: 768px) {
      .announcement-bar {
        padding-block: 0.25rem;
        font-size: 0.72rem;
      }
      .announcement-motto {
        display: none;
      }
      .lang-pill {
        display: none;
      }
      .hotline-label {
        display: none;
      }
      .top-social-item .social-txt {
        display: none;
      }
      .top-social-item.fb {
        display: none;
      }
      .header-inner {
        height: 56px;
        gap: 0.75rem;
      }
      .brand-logo {
        width: 40px;
        height: 40px;
      }
      .brand-name-ar {
        font-size: 1.15rem;
      }
      .brand-name-en {
        font-size: 0.82rem;
      }
      .brand-tagline {
        font-size: 0.62rem;
      }
      .header-actions {
        gap: 0.45rem;
      }
      .cart-trigger {
        width: 38px;
        height: 38px;
        font-size: 0.95rem;
      }
      .mobile-menu-btn {
        width: 38px;
        height: 38px;
        font-size: 1.05rem;
      }
    }
    @media (max-width: 480px) {
      .header-inner {
        height: 50px;
      }
      .brand-logo {
        width: 36px;
        height: 36px;
      }
      .brand-name-ar {
        font-size: 1.05rem;
      }
      .brand-name-en {
        font-size: 0.74rem;
      }
      .brand-tagline {
        display: none;
      }
      .cart-trigger {
        width: 35px;
        height: 35px;
        font-size: 0.9rem;
      }
      .mobile-menu-btn {
        width: 35px;
        height: 35px;
        font-size: 1rem;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  private configService = inject(ConfigService);
  private cartService = inject(CartService);
  readonly fulfillmentService = inject(FulfillmentService);
  private router = inject(Router);

  readonly business = this.configService.business;
  readonly cartCount = this.cartService.itemCount;
  readonly mobileMenuOpen = signal<boolean>(false);
  readonly isScrolled = signal<boolean>(false);
  readonly currentAnnouncement = 'فواكه طبيعية طازجة 100% يومياً • عصير على أصوله • فرع مول حياة تاون العبور';
  searchQuery = '';

  private ngZone = inject(NgZone);

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 20);

      this.ngZone.runOutsideAngular(() => {
        let ticking = false;
        window.addEventListener('scroll', () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              const scrolled = window.scrollY > 20;
              if (this.isScrolled() !== scrolled) {
                this.ngZone.run(() => {
                  this.isScrolled.set(scrolled);
                });
              }
              ticking = false;
            });
            ticking = true;
          }
        }, { passive: true });
      });
    }
  }

  setFulfillmentAndClose(type: FulfillmentType): void {
    this.fulfillmentService.setFulfillmentType(type);
    this.closeMobileMenu();
  }

  toggleMobileMenu(): void {
    const next = !this.mobileMenuOpen();
    this.mobileMenuOpen.set(next);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = next ? 'hidden' : '';
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  onSearchSubmit(): void {
    if (this.searchQuery.trim()) {
      this.closeMobileMenu();
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery.trim() } });
    }
  }
}
