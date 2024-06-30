import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";
const UseEditLabManger = () => {
  const [loading, setLoading] = useState(false);
  const editlabmanagerData = async (editlabmanager, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/users/staff/${editlabmanager.id}/update`,
        { ...editlabmanager },
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
  return { editlabmanagerData, loading };
};
export default UseEditLabManger;
