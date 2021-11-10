export class ApiEndpoint {
    public static SIGN_IN: APIDef = {
      method: "GET",
      api: () => `oauth/users`,
    };
  
  
  }
  
  export interface APIDef {
    method: string;
    api: any;
    isBlackListed?: boolean; 
  }
  
  export interface ApiInput {
    
  }
  