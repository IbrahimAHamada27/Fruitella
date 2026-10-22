import { AppEnvironment } from './environment';

export const environment: AppEnvironment = {
  production: true,
  demoMode: true,
  version: '3.0.0-phase3-client-presentation',
  apiBaseUrl: 'https://api.fruitella-obour.com/api/v1', // Provisional production URL for future Phase 4
  features: {
    tableOrdering: true,
    carService: true,
    takeawayService: true,
    deliveryService: true,
    onlinePayment: false,
    liveTrackingWebSocket: false
  }
};
