// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchSupliers = async () => {
  const { data } = await axiosInstance.get("/api/users/suppliers", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data.suppliers;
};
export const UseGetSupliers = () => {
  return useQuery({
    queryKey: ["suplier"],
    queryFn: fetchSupliers,
  });
};
