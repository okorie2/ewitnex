import { createSlice } from "@reduxjs/toolkit";
import {
  addPerformer,
  addTicket,
  createEvent,
  deletePerformer,
  eventLocation,
  fileUpload,
  publishEvent
} from "./thunkAction";
import { ICreateEvent, IEventFiles, IEventLocation } from "types/event";

interface ILoadingState {
  status: "failed" | "loading" | "successful" | "idle";
  error?: undefined
}

interface IState {
  loading: ILoadingState;
  createEventData: ICreateEvent;
  fileUploadData: IEventFiles;
  eventLocationData: IEventLocation;
}
const initialState: IState = {
  loading: {
    status: "idle",
    error: undefined
  },
  createEventData: <ICreateEvent>{},
  fileUploadData: <IEventFiles>{},
  eventLocationData: <IEventLocation>{},
};
const hostEventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createEvent.pending, (state: any) => {
        state.loading = { status: "loading" }
      })

      .addCase(createEvent.fulfilled, (state: any, action: any) => {
        return {
          ...state,
          loading: {
            status: "successful"
          },
          createEventData: action.payload,
        };
      })

      .addCase(createEvent.rejected, (state: any, action: any) => {
        state.loading = { status: "failed", error: action.payload.message }
      })

      .addCase(fileUpload.pending, (state: any) => {
        state.loading = { status: "loading" }
      })

      .addCase(fileUpload.fulfilled, (state: any, action: any) => {
        return {
          ...state,
          loading: {
            status: "successful"
          },
          fileUploadData: action.payload,
        };
      })

      .addCase(fileUpload.rejected, (state: any, action: any) => {
        state.loading = { status: "failed", error: action.payload.message }
      })

      .addCase(eventLocation.pending, (state: any) => {
        state.loading = { status: "loading" }
      })

      .addCase(eventLocation.fulfilled, (state: any, action: any) => {
        return {
          ...state,
          loading: {
            status: "successful"
          },
          eventLocationData: action.payload,
        };
      })

      .addCase(eventLocation.rejected, (state: any, action: any) => {
        state.loading = { status: "failed", error: action.payload.message }
      })

      .addCase(addPerformer.pending, (state: any) => {
        state.loading = { status: "loading" }
      })

      .addCase(addPerformer.fulfilled, (state: any, action: any) => {
        return {
          ...state, loading: {
            status: "successful"
          },
          data: action.payload
        };
      })

      .addCase(addPerformer.rejected, (state: any, action: any) => {
        state.loading = { status: "failed", error: action.payload.message }
      })

      .addCase(deletePerformer.pending, (state: any) => {
        state.loading = { status: "loading" }
      })

      .addCase(deletePerformer.fulfilled, (state: any) => {
        return {
          ...state, loading: {
            status: "successful"
          }
        };
      })

      .addCase(deletePerformer.rejected, (state: any, action: any) => {
        state.loading = { status: "failed", error: action.payload.message }
      })

      .addCase(addTicket.pending, (state: any) => {
        state.loading = { status: "loading" }
      })

      .addCase(addTicket.fulfilled, (state: any, action: any) => {
        return {
          ...state, loading: {
            status: "successful"
          },
          data: action.payload
        };
      })

      .addCase(addTicket.rejected, (state: any, action: any) => {
        state.loading = { status: "failed", error: action.payload.message }
      })

       .addCase(publishEvent.pending, (state: any) => {
        state.loading = { status: "loading" }
      })

      .addCase(publishEvent.fulfilled, (state: any, action: any) => {
        return {
          ...state, loading: {
            status: "successful"
          },
          data: action.payload
        };
      })

      .addCase(publishEvent.rejected, (state: any, action: any) => {
        state.loading = { status: "failed", error: action.payload.message }
      })
  }
})
export const HostEventReducer = hostEventSlice.reducer;
