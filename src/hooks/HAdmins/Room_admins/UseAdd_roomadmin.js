import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";
const UseaddRoomadmin = () => {
  const [loading, setLoading] = useState(false);

  const addRoomadmin = async (roomadmin_data, userData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/api/users/admins/store`,
        { ...roomadmin_data , static_role:'room_admin' },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );
      console.log(response, "room admins response");
      if (response.status >= 200 && response.status < 300) {
        return { success: true };
      } else {
        return { success: false, error: "An unexpected error occurred." };
      }
    } catch (error) {
      const errorMessage =
      error.response?.data?.error?.message || "An unexpected error occurred.";
      console.log(error , 'err add room admin');
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { addRoomadmin, loading };
};

export default UseaddRoomadmin;
