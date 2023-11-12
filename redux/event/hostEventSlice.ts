import { createSlice } from "@reduxjs/toolkit";
import {
  addPerformer,
  addTicket,
  createEvent,
  eventLocation,
  fileUpload,
} from "./thunkAction";
import { ICreateEvent, IEventFiles, IEventLocation } from "types/event";
interface IState {
  loading: "failed" | "loading" | "successful" | "idle";
  createEventData: ICreateEvent;
  fileUploadData: IEventFiles;
  eventLocationData: IEventLocation;
}
const initialState: IState = {
  loading: "idle",
  createEventData: <ICreateEvent>{},
  fileUploadData: <IEventFiles>{},
  eventLocationData: <IEventLocation>{},
};
const hostEventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createEvent.pending, (state) => {
      return { ...state, loading: "loading" };
    });

    builder.addCase(createEvent.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        createEventData: action.payload,
      };
    });
    builder.addCase(createEvent.rejected, (state) => {
      return { ...state, loading: "failed" };
    });
    builder.addCase(fileUpload.pending, (state) => {
      return { ...state, loading: "loading" };
    });

    builder.addCase(fileUpload.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        fileUploadData: action.payload,
      };
    });
    builder.addCase(fileUpload.rejected, (state) => {
      return { ...state, loading: "failed" };
    });
    builder.addCase(eventLocation.pending, (state) => {
      return { ...state, loading: "loading" };
    });

    builder.addCase(eventLocation.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        eventLocationData: action.payload,
      };
    });
    builder.addCase(eventLocation.rejected, (state) => {
      return { ...state, loading: "failed" };
    });
    builder.addCase(addPerformer.pending, (state) => {
      return { ...state, loading: "loading" };
    });

    builder.addCase(addPerformer.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(addPerformer.rejected, (state) => {
      return { ...state, loading: "failed" };
    });
    builder.addCase(addTicket.pending, (state) => {
      return { ...state, loading: "loading" };
    });

    builder.addCase(addTicket.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(addTicket.rejected, (state) => {
      return { ...state, loading: "failed" };
    });
  },
});

export const HostEventReducer = hostEventSlice.reducer;
