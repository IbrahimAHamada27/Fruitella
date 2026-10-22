import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-skeleton',
  standalone: true,
  template: `
    <div class="skeleton-grid">
      @for (item of skeletonArray; track $index) {
        <div class="skeleton-card">
          <div class="skeleton-media shimmer"></div>
          <div class="skeleton-body">
            <div class="skeleton-line sm shimmer"></div>
            <div class="skeleton-line lg shimmer"></div>
            <div class="skeleton-line md shimmer"></div>
            <div class="skeleton-footer">
              <div class="skeleton-line sm shimmer"></div>
              <div class="skeleton-circle shimmer"></div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .skeleton-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.5rem;
      width: 100%;
    }
    .skeleton-card {
      background: var(--fruitella-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .skeleton-media {
      width: 100%;
      aspect-ratio: 4 / 3;
      background: #e2e8f0;
    }
    .skeleton-body {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .skeleton-line {
      height: 14px;
      border-radius: var(--radius-xs);
      background: #e2e8f0;
    }
    .skeleton-line.sm { width: 40%; }
    .skeleton-line.md { width: 75%; }
    .skeleton-line.lg { width: 90%; height: 18px; }
    .skeleton-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
      padding-top: 0.75rem;
      border-top: 1px dashed var(--border-subtle);
    }
    .skeleton-circle {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #e2e8f0;
    }
    .shimmer {
      background: linear-gradient(90deg, #f0f4f1 25%, #e2e8f0 50%, #f0f4f1 75%);
      background-size: 200% 100%;
      animation: shimmerAnimation 1.5s infinite;
    }
    @keyframes shimmerAnimation {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `]
})
export class LoadingSkeletonComponent {
  readonly count = input<number>(4);

  get skeletonArray(): number[] {
    return Array(this.count()).fill(0);
  }
}
