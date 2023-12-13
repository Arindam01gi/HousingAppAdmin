export interface ErrorState {
    error?: ErrorModel;
  }
  
  export interface ErrorModel {
    status: string;
  }
  
  export interface SystemError {
    CODE: string;
    MESSAGE: string;
  }