import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseEditNurseData = () => {
  const [loading, setLoading] = useState(false);
  const editNurseData = async (editNurse, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/users/staff/${editNurse.id}/update`,
        { ...editNurse },
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
  return { editNurseData, loading };
};
export default UseEditNurseData;
