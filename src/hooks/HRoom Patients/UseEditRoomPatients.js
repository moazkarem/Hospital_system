import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseEditRoomPatients = () => {
  const [loading, setLoading] = useState(false);
  const editRoomPatientsData = async (roomPatients, userData) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(
        `/api/rooms/update-patient/${roomPatients.id}`,
        { ...roomPatients },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );
      console.log(res , 'edit room patients');
      return { success: res.status === 200 };
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  return { editRoomPatientsData, loading };
};
export default UseEditRoomPatients;
