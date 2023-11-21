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
import toast from "react-hot-toast";

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
      toast.success("Event created")
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        toast.error(message.message)
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
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        toast.error(message.message)
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
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        if(message.message.includes("Cast to date")){
          toast.error("Reselect date")
        }else{
          toast.error(message.message)
        }
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
        const message = error.response.data as {status:number , message: string };
        console.log(message.message, "error message");
        toast.error(message.message)
        // if(message.status.toString().startsWith("4")){
        //   toast.error("Not authorized")
        // }
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const deletePerformer = createAsyncThunk(
  "event/deletePerformer",
  async (data: {eventId:string, performerId:string}, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/${data.eventId}/performers/${data.performerId}/delete-performer`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "delete",
      });

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        toast.error(message.message)
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
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        toast.error(message.message)
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
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        // toast.error(message.message)
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
          url: `${config.API_BASE_URL}/events?eventsType=${data}&page=1&limit=30`,
          method: 'get',
      });
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
