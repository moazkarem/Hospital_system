// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchDoctors = async () => {
  const { data } = await axiosInstance.get("/api/users/staff/doctor", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data.users;
};
export const UseGetDoctors = () => {
  return useQuery({
    queryKey: ["doctors"],
    queryFn: fetchDoctors,
  });
};
