import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../config/axios.config";
import { useSelector } from "react-redux";


const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const fetchLabPatients = async (labId) => {
  const { data } = await axiosInstance.get(`api/lab/${labId}/patients`, {
    headers: {
      Authorization: `Bearer ${userData.data.access_token}`,
    },
  });

  return data.data;
};

export const UseGetLabPatients = () => {
  // @ts-ignore
  const { LabId } = useSelector((state) => state.getLabtools);
  const StoredId = localStorage.getItem("labId");
  const labIdStored = StoredId ? JSON.parse(StoredId) : null;
  const labIdToUse = LabId !== null ? LabId : labIdStored

  return useQuery({
    queryKey: ["labtools", labIdToUse],
    queryFn: () => fetchLabPatients(labIdToUse)
 
  });
};
