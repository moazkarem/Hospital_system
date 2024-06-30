import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseEditLabData = () => {
  const [loading, setLoading] = useState(false);
  const editLabData = async (editLab, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/lab/${editLab.id}/update`,
        { ...editLab },
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
  return { editLabData, loading };
};
export default UseEditLabData;
