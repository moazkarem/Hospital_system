// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchTool = async () => {
  const { data } = await axiosInstance.get("/api/tools", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data.tools;
};
export const UseGetAllTools = () => {
  return useQuery({
    queryKey: ["tool"],
    queryFn: fetchTool,
  });
};
