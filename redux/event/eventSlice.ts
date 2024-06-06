import { createSlice } from "@reduxjs/toolkit";
import { deleteEventById, getEventById, getEvents, updateEventProgram } from "./thunkAction";
import { IEvent } from "types/event";

interface ILoadingState {
  status: "failed" | "loading" | "successful" | "idle";
  error?: undefined
}

interface IState {
  loading: ILoadingState;
  events: IEvent[];
  currentEvent: IEvent
}
const initialState: IState = {
  loading: {
    status: "idle",
    error: undefined
  },
  events: [],
  currentEvent: {} as IEvent
};

const EventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEventById.pending, (state) => {
      return { ...state, loading: { status: "loading" } };
    });

    builder.addCase(getEventById.fulfilled, (state, action) => {
      return { ...state, loading: { status: "successful" }, currentEvent: action.payload };
    });
    builder.addCase(getEventById.rejected, (state, action) => {
      return { ...state, loading: { status: "failed", error: action.payload.message } };
    });
    builder.addCase(deleteEventById.pending, (state) => {
      return { ...state, loading: { status: "loading" } };
    });

    builder.addCase(deleteEventById.fulfilled, (state) => {
      return { ...state, loading: { status: "successful" }, currentEvent: {} };
    });
    builder.addCase(deleteEventById.rejected, (state: any, action: any) => {
      return { ...state, loading: { status: "failed", error: action.payload.message } };
    });
    builder.addCase(getEvents.pending, (state) => {
      return {
        ...state,
        loading: { status: "loading" },
      };
    });

    builder.addCase(getEvents.fulfilled, (state, action) => {
      return {
        ...state,
        loading: { status: "successful" },
        events: action.payload,
      };
    });

    builder.addCase(getEvents.rejected, (state: any, action: any) => {
      return {
        ...state,
        loading: { status: "failed", error: action.payload.message },
      };
    });

    builder.addCase(updateEventProgram.pending, (state) => {
      return {
        ...state,
        loading: { status: "loading" },
      };
    });

    builder.addCase(updateEventProgram.fulfilled, (state, action) => {
      return {
        ...state,
        loading: { status: "successful" },
        events: action.payload,
      };
    });

    builder.addCase(updateEventProgram.rejected, (state: any, action: any) => {
      return {
        ...state,
        loading: { status: "failed", error: action.payload.message },
      };
    });
  },
});

export const EventReducer = EventSlice.reducer;
