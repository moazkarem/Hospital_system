// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchRoomPatients = async () => {
  const { data } = await axiosInstance.get("/api/general/get-all-patients", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data;
};
export const UseSelectPatientsRoom = () => {
  return useQuery({
    queryKey: ["roompatients"],
    queryFn: fetchRoomPatients,
  });
};
