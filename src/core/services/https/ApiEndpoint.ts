export class ApiEndpoint {
    public static SIGN_IN: APIDef = {
      method: "GET",
      api: () => `oauth/users`,
    };
  
    public static GET_MOVIES: APIDef = {
      method: "GET",
      api: () => `api/movies`,
    };
  
  
  }
  
  export interface APIDef {
    method: string;
    api: any;
    isBlackListed?: boolean; 
  }
  
  export interface ApiInput {
    
  }
  