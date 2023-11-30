import { StaticImageData } from "next/image";

export interface ICreateEvent {
  EventTitle: string;
  organizedBy: string;
  interests: string;
  category: string;
  isPublic: boolean;
  description: string;
}

export interface IEventFiles {
  filePDF: File | undefined;
  coverImage: File | undefined;
}

export interface ReqEventFiles {
  eventID: string;
  formData: IEventFiles;
}

export interface IEventLocation {
  type: "live" | "online";
  startDate: string;
  endDate: string;
  searchLocation?: string;
  enterLocation?: string;
  selectHost?: string;
  hostUrl?: string;
}

export interface ReqEventLocation {
  eventID: string;
  location: { location: IEventLocation };
}

export interface IPerformer {
  img: string;
  name: string;
  role: string;
  title: string;
  id: string;
  setGetPerformers?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IReqPerformer {
  newPerformers: [
    {
      nameOfPerformer: string;
      performerTitle: string;
      performerRole: string;
      aboutPerformer: string;
    }
  ];
  performerImage: File | undefined | null;
}

export interface ITicket {
  ticketName: string;
  ticketPrice: number;
  ticketQty: number;
  ticketRefund: string;
  id: string;
  setGetTickets?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IReqTicket {
  tickets: [
    {
      ticketType: string;
      ticketName: string;
      ticketPrice: number;
      ticketQty: number;
      ticketHandle: string;
      ticketRefund: string;
    }
  ];
}

export interface ReqPerformer {
  eventID: string;
  form: FormData;
}

export interface ReqTicket {
  eventID: string;
  formData: IReqTicket;
}

export interface IEvent {
  EventTitle: string;
  OrganizedBy: string;
  category: string;
  createdAt: string;
  description: string;
  eventCode: string;
  interests: string;
  isPublic: boolean;
  location: {
    endDate: null | string;
    enterLocation: string;
    searchLocation: string;
    startDate: string;
    type: string;
    selectHost: string;
    hostUrl: string;
  };
  performers: {
    aboutPerformer: string;
    nameOfPerformer: string;
    performerImage: string;
    performerRole: string;
    performerTitle: string;
    _id: string;
  }[];
  tickets: {
    ticketHandle: string;
    ticketName: string;
    ticketPrice: number;
    ticketQty: number;
    ticketRefund: string;
    ticketType: string;
    _id: string;
  }[];
  updatedAt: string;
  coverImage: string;
  filePDF: string;
  _id: string;
}
