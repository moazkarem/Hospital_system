import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios.config";
import { useSelector } from "react-redux";


const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchRoomTools = async (roomId) => {
  const { data } = await axiosInstance.get(`/api/tools/${roomId}/room`, {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data;
};

export const UseGetRoomTools = () => {
  // @ts-ignore
  const { roomId } = useSelector((state) => state.getroompatients);
  const StoredId = localStorage.getItem("roomId");
  const roomIdStored = StoredId ? JSON.parse(StoredId) : null;
  const roomIdToUse = roomId !== null ? roomId : roomIdStored

  return useQuery({
    queryKey: ["roompatools", roomIdToUse],
    queryFn: () => fetchRoomTools(roomIdToUse)

  });
};
