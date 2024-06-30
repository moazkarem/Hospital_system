import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";

const UseDeleteRoom = () => {
  const [loading, setLoading] = useState(false);

  const deleteRoomData = async (roomId, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.delete(
        `/api/rooms/${roomId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${userData.data.access_token}`,
          },
        }
      );

      return { success: status === 200 };
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { deleteRoomData, loading };
};

export default UseDeleteRoom;
