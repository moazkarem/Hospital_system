import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";
const UseEdit_labadmi = () => {
  const [loading, setLoading] = useState(false);
  const editLabadmin = async (editLabadmin, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/users/admins/${editLabadmin.id}/update`,
        { ...editLabadmin },
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
  return { editLabadmin, loading };
};
export default UseEdit_labadmi;
