// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchPatients = async () => {
  const { data } = await axiosInstance.get("/api/users/patients", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data.patients;
};
export const UsegetPatients = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: fetchPatients,
  });
};
