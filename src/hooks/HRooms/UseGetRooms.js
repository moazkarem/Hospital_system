// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchRooms = async () => {
  const { data } = await axiosInstance.get("/api/rooms", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data.rooms;
};
export const UseGetRooms = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: fetchRooms,
  });
};
