// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchNursing = async () => {
  const { data } = await axiosInstance.get("/api/users/staff/nurse", {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data.users;
};
export const UsegetNursing = () => {
  return useQuery({
    queryKey: ["nurse"],
    queryFn: fetchNursing,
  });
};
