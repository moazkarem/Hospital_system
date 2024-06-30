import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseEditRoom = () => {
  const [loading, setLoading] = useState(false);
  const editRoomData = async (editRoom, userData) => {
    setLoading(true);
    try {
      const { status , data } = await axiosInstance.post(
        `/api/rooms/${editRoom.id}/update`,
        { ...editRoom },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );
      console.log(data , 'use edit room');
      return { success: status === 200 };
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  return { editRoomData, loading };
};
export default UseEditRoom;
