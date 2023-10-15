export interface ISignUpRes {
    success:boolean
    data:{
        message:string
        user: IUserDetails
    }
}

export interface ISignInRes {
    success:boolean
    user: IUserDetails
    token: string
}

export interface IUserDetails {
    id: string;
    first_name: string;
    last_name: string;
    gender: string;
    email:string;
    phoneNumber: number;
    username: string;
    city: string;
    longitude: number;
    latitude: number;
    interest: string[];
    isAdmin: boolean;
    isEventOrganizer: boolean;
}