import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";
const UseAddlab_admin = () => {
  const [loading, setLoading] = useState(false);

  const addlab_admin = async (labadmin_data, userData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/api/users/admins/store`,
        { ...labadmin_data , static_role:'lab_admin' },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );
      console.log(response, "lab admins response");
      if (response.status >= 200 && response.status < 300) {
        return { success: true };
      } else {
        return { success: false, error: "An unexpected error occurred." };
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { addlab_admin, loading };
};

export default UseAddlab_admin;
