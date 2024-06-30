// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetch_roomadmins = async () => {
  const { data } = await axiosInstance.get("/api/users/admins/room_admin", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data.users;
};
export const Useget_roomadmins = () => {
  return useQuery({
    queryKey: ["roomadmins"],
    queryFn: fetch_roomadmins,
  });
};
