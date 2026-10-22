import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="heading-wrapper" [class.text-center]="centered()">
      @if (badge()) {
        <span class="heading-badge">{{ badge() }}</span>
      }
      <h2 class="main-title">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="subtitle">{{ subtitle() }}</p>
      }
      @if (linkUrl() && linkText()) {
        <a [routerLink]="linkUrl()" class="view-all-link">
          {{ linkText() }} <i class="fa-solid fa-arrow-left"></i>
        </a>
      }
    </div>
  `,
  styles: [`
    .heading-wrapper {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .heading-wrapper.text-center {
      align-items: center;
      text-align: center;
    }
    .heading-badge {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--fruitella-lime);
      background: var(--fruitella-lime-bg);
      padding: 0.25rem 0.85rem;
      border-radius: var(--radius-full);
      width: fit-content;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .main-title {
      font-size: 2rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .subtitle {
      font-size: 1rem;
      color: var(--text-secondary);
      max-width: 600px;
      text-wrap: pretty;
    }
    .view-all-link {
      font-weight: 700;
      font-size: 0.9rem;
      color: var(--fruitella-green-700);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.5rem;
      transition: all var(--transition-fast) ease;
    }
    .view-all-link:hover {
      color: var(--fruitella-lime);
      gap: 0.6rem;
    }
    @media (max-width: 768px) {
      .main-title {
        font-size: 1.6rem;
      }
    }
  `]
})
export class SectionHeadingComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly badge = input<string>();
  readonly centered = input<boolean>(false);
  readonly linkUrl = input<string>();
  readonly linkText = input<string>();
}
