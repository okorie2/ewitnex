export interface ISignUpRes {
  success: boolean;
  data: {
    message: string;
    user: IUserDetails;
  };
}

export interface ISignInRes {
  success: boolean;
  user: IUserDetails;
  token: string;
}

export interface ILoadUser {
  success: boolean;
  user: IUserDetails;
}

export interface IUserDetails {
  _id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phoneNumber: number;
  username: string;
  city: {
    city: string;
    longitude: number;
    latitude: number;
  };
  interest: string[];
  isAdmin: boolean;
  isEventOrganizer: boolean;
}

export interface ReqUpdateUser {
  email: string;
  username: string;
  gender: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}
