import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseAddRoomPatients = () => {
  const [loading, setLoading] = useState(false);

  const addRoomPatients = async (roomPatientData, userData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/api/rooms/add-patient`,
        { ...roomPatientData },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );
      console.log(response, "add room patients");
      if (response.status >= 200 && response.status < 300) {
        return { success: true };
      } else {
        return { success: false, error: "An unexpected error occurred." };
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { addRoomPatients, loading };
};

export default UseAddRoomPatients;
