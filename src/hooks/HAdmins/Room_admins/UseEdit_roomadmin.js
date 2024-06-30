import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";
const UseEditroomadmin = () => {
  const [loading, setLoading] = useState(false);
  const editRoomadmin = async (editroomadmin, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/users/admins/${editroomadmin.id}/update`,
        { ...editroomadmin },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
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
  return { editRoomadmin, loading };
};
export default UseEditroomadmin;
