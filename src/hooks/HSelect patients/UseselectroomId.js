// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchRoomId = async () => {
  const { data } = await axiosInstance.get("/api/general/get-all-rooms", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data;
};
export const UseselectRoomid = () => {
  return useQuery({
    queryKey: ["roomidPatients"],
    queryFn: fetchRoomId,
  });
};
