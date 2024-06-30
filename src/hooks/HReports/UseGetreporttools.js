// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetccReportools = async () => {
  const { data } = await axiosInstance.get("/api/reports-1", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });
  console.log(data.data, "reports tools");
  return data.data;
};
export const UseGetreportools = () => {
  return useQuery({
    queryKey: ["toolsreports"],
    queryFn: fetccReportools,
  });
};
