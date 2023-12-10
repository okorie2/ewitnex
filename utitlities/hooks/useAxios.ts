import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useRouter } from "next/router";

export const useAxios = async (
  request: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await axios.request({
    ...request,
    headers: {
      ...request.headers,
      authorization: `Bearer ${sessionStorage.getItem("token")}`,
      mode: "cors",
    },
  });
  if (response.status === 401) {
    console.log("clear");
    localStorage.clear();
    sessionStorage.clear()
  }
  return response;
};