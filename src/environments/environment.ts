export interface AppEnvironment {
  production: boolean;
  demoMode: boolean;
  version: string;
  apiBaseUrl: string; // Provisional base URL for future backend API
  features: {
    tableOrdering: boolean;
    carService: boolean;
    takeawayService: boolean;
    deliveryService: boolean;
    onlinePayment: boolean; // Disabled in Phase 1-3 Frontend Demo
    liveTrackingWebSocket: boolean; // Disabled in Phase 1-3 (Uses simulated stepper)
  };
}

export const environment: AppEnvironment = {
  production: false,
  demoMode: true,
  version: '3.0.0-phase3-client-presentation',
  apiBaseUrl: 'http://localhost:3000/api/v1', // Provisional placeholder for Phase 4 backend
  features: {
    tableOrdering: true,
    carService: true,
    takeawayService: true,
    deliveryService: true,
    onlinePayment: false, // Explicitly marked as demo/cash only
    liveTrackingWebSocket: false // Simulated in frontend demo
  }
};
