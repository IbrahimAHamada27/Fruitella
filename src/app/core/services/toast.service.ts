import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  icon?: string;
  durationMs?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  readonly toasts = signal<ToastMessage[]>([]);

  show(message: string, type: 'success' | 'info' | 'warning' | 'error' = 'success', durationMs = 1500): void {
    const id = Math.random().toString(36).substring(2, 9);
    let icon = 'fa-solid fa-circle-check';
    if (type === 'info') icon = 'fa-solid fa-circle-info';
    if (type === 'warning') icon = 'fa-solid fa-triangle-exclamation';
    if (type === 'error') icon = 'fa-solid fa-circle-xmark';

    const toast: ToastMessage = { id, message, type, icon, durationMs };
    // Keep only the newest toast to prevent multi-toast screen clutter
    this.toasts.set([toast]);

    setTimeout(() => {
      this.remove(id);
    }, durationMs);
  }

  remove(id: string): void {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}
