// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchRoomTools = async () => {
  const { data } = await axiosInstance.get("/api/general/get-all-tools", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data;
};
export const UseSelectRoomTools = () => {
  return useQuery({
    queryKey: ["roomtools"],
    queryFn: fetchRoomTools,
  });
};
