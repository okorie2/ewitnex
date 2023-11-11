import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config/api";
import { useAxios } from "utitlities/hooks/useAxios";
import {
  ICreateEvent,
  ReqPerformer,
  ReqEventFiles,
  ReqEventLocation,
  ReqTicket,
} from "types/event";

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (data: ICreateEvent, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/create`,
        method: "post",
        data: data,
      });

      localStorage.setItem("currenteventID", response.data.data._id);
      localStorage.setItem("currenteventCode", response.data.data.eventCode);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { error: string };
        console.log(message.error, "error message");
        localStorage.setItem("error", message.error);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const fileUpload = createAsyncThunk(
  "event/fileUpload",
  async (data: ReqEventFiles, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/${data.eventID}/update-cover-program`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        data: data.formData,
      });

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { error: string };
        console.log(message.error, "error message");
        localStorage.setItem("error", message.error);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const eventLocation = createAsyncThunk(
  "event/eventLocation",
  async (data: ReqEventLocation, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/${data.eventID}/event-location`,
        method: "post",
        data: data.location,
      });
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { error: string };
        console.log(message.error, "error message");
        localStorage.setItem("error", message.error);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const addPerformer = createAsyncThunk(
  "event/addPerformer",
  async (data: ReqPerformer, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/${data.eventID}/event-performer`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        data: data.form,
      });

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { error: string };
        console.log(message.error, "error message");
        localStorage.setItem("error", message.error);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const addTicket = createAsyncThunk(
  "event/addTicket",
  async (data: ReqTicket, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/${data.eventID}/event-ticket`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        data: data.formData,
      });

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { error: string };
        console.log(message.error, "error message");
        localStorage.setItem("error", message.error);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const getEventById = createAsyncThunk(
  "event/getPerformerById",
  async (data: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/details/${data}`,
        method: "get",
      });

      const performers = response.data.data.performers;
      const tickets = response.data.data.tickets;
      sessionStorage.setItem("performers", JSON.stringify(performers));
      sessionStorage.setItem("tickets", JSON.stringify(tickets));
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { error: string };
        console.log(message.error, "error message");
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const deleteEventById = createAsyncThunk(
  "event/deleteEventById",
  async (data: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/event/delete-event/${data}`,
        method: "delete",
      });
      console.log(response.data.message);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { error: string };
        console.log(message.error, "error message");
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const getEvents = createAsyncThunk('post/get', async (data: string, thunkAPI) => {
  try {
      const response = await useAxios({
          url: `${config.API_BASE_URL}/events?eventsType=All&page=1&limit=30`,
          method: 'get',
      });
      //   toast.success(response.data.message);
      // const signUpData: ISignUpRes = response.data;
      console.log(response.data.data)
      return response.data.data
  } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
          console.log(error.response);
          const message = error.response.data as { message: string };
          return thunkAPI.rejectWithValue(error.message);
      } else {
          return thunkAPI.rejectWithValue(String(error));
      }
  }
});
