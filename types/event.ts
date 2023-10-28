import { StaticImageData } from "next/image"

export interface ICreateEvent {
    eventTitle:string,
    organizedBy:string,
    interests:string,
    category:string,
    isPublic: boolean,
    description:string
}

export interface IEventFiles {
    filePDF: File | undefined
    coverImage:File | undefined
}

export interface ReqEventFiles {
    eventID:string
    formData:IEventFiles
}

export interface IEventLocation {
    type:  "live" | "online"
    startDate: string
    endDate: string
    searchLocation?:string,
    enterLocation?:string
    selectHost?:string,
    hostUrl?:string
}

export interface ReqEventLocation {
    eventID:string
    location :{ location : IEventLocation}
}

export interface IPerformer {
    img: string;
    name: string;
    role: string;
    title: string;
}

export interface IReqPerformer {
    performer :{
        isPerformer: boolean,
    nameOfPerformer: string,
    performerTitle: string,
    performerRole: string,
    aboutPerformer: string
    };
    performerImage: File | undefined
}

export interface ReqPerformer {
    eventID:string
    formData: IReqPerformer
}