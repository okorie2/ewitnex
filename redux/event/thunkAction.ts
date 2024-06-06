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
  IEvent,
  IReqUpdateTicket
} from "types/event";
import toast from "react-hot-toast";

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (_data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/event/initialize`,
        method: "post",
      });

      localStorage.setItem("currenteventID", response.data.data._id);
      localStorage.setItem("currenteventCode", response.data.data.eventCode);
      toast.success("Event created");
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        toast.error(message.message);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const updateEventProgram = createAsyncThunk(
  "event/updateEventProgram",
  async (data: {
    eventId: any,
    formData: {
      title: string,
      organizersId: string[],
      eventTypeId: Number,
      eventCategoryId: Number,
      isPublic: boolean,
      about: string,
    }
  }, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/program_info/${data.eventId}`,
        method: "patch",
        data: data.formData,
      });

      localStorage.setItem("currenteventID", response.data.data._id);
      localStorage.setItem("currenteventCode", response.data.data.eventCode);
      toast.success("Event updated");
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        toast.error(message.message);
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
        url: `${config.API_BASE_URL}/file/program_files/${data.eventID}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "put",
        data: data.formData,
      });

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        toast.error(message.message);
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
        url: `${config.API_BASE_URL}/scheduler/${data.eventID}`,
        method: "put",
        data: data.location,
      });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        if (message.message.includes("Cast to date")) {
          toast.error("Reselect date");
        } else {
          toast.error(message.message);
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
        url: `${config.API_BASE_URL}/performer/${data.eventID}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        data: data.form,
      });

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as {
          status: number;
          message: string;
        };
        console.log(message.message, "error message");
        toast.error(message.message);
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

export const updatePerformer = createAsyncThunk(
  "event/updatePerformer",
  async (
    data: { eventID: string; performerId: string; form: FormData },
    thunkAPI
  ) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/${data.eventID}/performers/${data.performerId}/performer`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "put",
        data: data.form,
      });
      toast.success("Performer updated succesfully");
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as {
          status: number;
          message: string;
        };
        console.log(message.message, "error message");
        toast.error(message.message);
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
  async (data: { eventId: string; performerId: string }, thunkAPI) => {
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
        toast.error(message.message);
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
        url: `${config.API_BASE_URL}/ticket/${data.eventID}`,
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
        toast.error(message.message);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const updateTicket = createAsyncThunk(
  "event/updatePerformer",
  async (
    data: { eventID: string; ticketId: string; form: IReqUpdateTicket },
    thunkAPI
  ) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/${data.eventID}/tickets/${data.ticketId}`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "put",
        data: data.form,
      });
      toast.success("Ticket updated succesfully");
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as {
          status: number;
          message: string;
        };
        console.log(message.message, "error message");
        toast.error(message.message);
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


export const deleteTicket = createAsyncThunk(
  "event/deleteTicket",
  async (data: { eventId: string; ticketId: string }, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/${data.eventId}/tickets/${data.ticketId}`,
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
        toast.error(message.message);
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const getEventById = createAsyncThunk(
  "event/getEventById",
  async (data: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/event/${data}`,
        method: "get",
      });

      const performers = response.data.data.performers;
      const tickets = response.data.data.tickets;
      sessionStorage.setItem("performers", JSON.stringify(performers));
      sessionStorage.setItem("tickets", JSON.stringify(tickets));

      console.log('API Response:', response.data.data); // Add this line
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { message: string };
        console.log(message.message, "error message");
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const deleteEventById = createAsyncThunk(
  "events/deleteEventById",
  async (data: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/events/delete-event/${data}`,
        method: "delete",
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data as { message: string };
        toast.error(message.message);
        console.log(message.message, "error message");
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const getEvents = createAsyncThunk(
  "post/get",
  async (data: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/event`,
        method: "get",
      });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response);
        const message = error.response.data as { message: string };
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const publishEvent = createAsyncThunk(
  "post/get",
  async (data: string, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/event/${data}/publish`,
        method: "get",
      });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response);
        const message = error.response.data as { message: string };
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);