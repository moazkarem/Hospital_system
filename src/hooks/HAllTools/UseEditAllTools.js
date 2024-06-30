import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseEditTool = () => {
  const [loading, setLoading] = useState(false);
  const editToolData = async (editTool, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/tools/${editTool.id}/update`,
        { ...editTool },
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
  return { editToolData, loading };
};
export default UseEditTool;
