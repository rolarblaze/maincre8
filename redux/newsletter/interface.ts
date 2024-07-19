// redux/newsletter/interface.ts

// Define the shape of the newsletter response
export interface NewsletterResponse {
    detail: string;
  }
  
  // Define the state shape for the newsletter slice
  export interface NewsletterState {
    message: string | null;
    isLoading: boolean;
    error: string | null;
  }
  