import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";
const UseEditAlladmins = () => {
  const [loading, setLoading] = useState(false);
  const editAlladmins = async (editAlladmin, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/users/admins/${editAlladmin.id}/update`,
        { ...editAlladmin },
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
  return { editAlladmins, loading };
};
export default UseEditAlladmins;
