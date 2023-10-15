import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const useAxios = async (
  request: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await axios.request({
    ...request,
    headers: {
      ...request.headers,
      authorization: `Bearer ${localStorage.getItem("token")}`,
      mode: "cors",
    },
  });
  if (response.status === 401) {
    console.log("clear");
    localStorage.clear();
  }
  return response;
};