// Actions
export enum ActionTypes {
  AUTH_REQUEST = "@user/AUTH_REQUEST",
  AUTH_SUCCESS = "@user/AUTH_SUCCESS",
  AUTH_FAILURE = "@user/AUTH_FAILURE",
  AUTH_LOGOUT = "@user/AUTH_LOGOUT",
}

// State
export interface UserState {
  readonly isLoading: boolean;
  readonly data?: User;
  readonly error?: string;
}

// User
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// Utils
export interface AuthCredentials {
  email: string;
  password: string;
}
