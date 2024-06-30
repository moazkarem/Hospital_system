import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseAddRoom = () => {
  const [loading, setLoading] = useState(false);

  const addRoomData = async (roomData, userData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/api/rooms/store`,
        { ...roomData },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );
      console.log(response , 'use add room');
      if (response.status >= 200 && response.status < 300) {
        return { success: true };
      } else {
        return { success: false, error: "An unexpected error occurred." };
      }
    } catch (error) {
      console.log(error , 'use add room');
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { addRoomData, loading };
};

export default UseAddRoom;
