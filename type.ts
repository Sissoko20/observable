export interface User {
    id: number;
    name: string;
    description: string;
  }
  export interface UserApi {
    id: number;
    last_name: string;
    first_name: string;
    email:string;
  }
  export interface CountryDay {
    id: number;
    name: string;
    localName: string;
    date:Date
    
  }