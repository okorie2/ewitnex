import { createSlice } from "@reduxjs/toolkit";
import { deleteEventById, getEventById, getEvents, updateEventProgram } from "./thunkAction";
import { IEvent } from "types/event";

interface IState {
  loading: "failed" | "loading" | "successful" | "idle";
  events: IEvent[];
  event: IEvent
}
const initialState: IState = {
  loading: "idle",
  events: [],
  event: {} as IEvent
};
const EventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEventById.pending, (state) => {
      return { ...state, loading: "loading" };
    });

    builder.addCase(getEventById.fulfilled, (state, action) => {
      return { ...state, loading: "successful", event: action.payload };
    });
    builder.addCase(getEventById.rejected, (state) => {
      return { ...state, loading: "failed" };
    });
    builder.addCase(deleteEventById.pending, (state) => {
      return { ...state, loading: "loading" };
    });

    builder.addCase(deleteEventById.fulfilled, (state) => {
      return { ...state, loading: "successful" };
    });
    builder.addCase(deleteEventById.rejected, (state) => {
      return { ...state, loading: "failed" };
    });
    builder.addCase(getEvents.pending, (state) => {
      return {
        ...state,
        loading: "loading",
      };
    });

    builder.addCase(getEvents.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        events: action.payload,
      };
    });

    builder.addCase(getEvents.rejected, (state) => {
      return {
        ...state,
        loading: "failed",
      };
    });   

    builder.addCase(updateEventProgram.pending, (state) => {
      return {
        ...state,
        loading: "loading",
      };
    });

    builder.addCase(updateEventProgram.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful",
        events: action.payload,
      };
    });

    builder.addCase(updateEventProgram.rejected, (state) => {
      return {
        ...state,
        loading: "failed",
      };
    });   
  },
});

export const EventReducer = EventSlice.reducer;
