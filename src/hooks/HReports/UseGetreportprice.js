// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetccReportPrice = async () => {
  const { data } = await axiosInstance.get("/api/reports-2", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });
  console.log(data.data, "reports doctors");
  return data.data;
};
export const UseGetreportprice = () => {
  return useQuery({
    queryKey: ["reporprices"],
    queryFn: fetccReportPrice,
  });
};
