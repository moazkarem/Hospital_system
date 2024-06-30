import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";

const UseDelRoomadmin = () => {
  const [loading, setLoading] = useState(false);

  const delRoomadmin = async (roomadminId, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.delete(
        `/api/users/admins/${roomadminId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${userData.data.access_token}`,
          },
        }
      );
      console.log("room amins delee");
      return { success: status === 200 };
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { delRoomadmin, loading };
};

export default UseDelRoomadmin;
