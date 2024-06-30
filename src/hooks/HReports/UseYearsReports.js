// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetccReporYears = async () => {
  const { data } = await axiosInstance.get("/api/reports-4", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });
  console.log(data.data, "reports years");
  return data.data;
};
export const UseGetreporyears = () => {
  return useQuery({
    queryKey: ["yearsreports"],
    queryFn: fetccReporYears,
  });
};
