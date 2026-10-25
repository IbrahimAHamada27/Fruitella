import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import { ORDER_SUBMISSION_SERVICE } from './core/contracts/order-submission.contract';
import { WhatsAppOrderSubmissionService } from './core/services/whatsapp-order-submission.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    provideHttpClient(),
    {
      provide: ORDER_SUBMISSION_SERVICE,
      useClass: WhatsAppOrderSubmissionService
    }
  ]
};
