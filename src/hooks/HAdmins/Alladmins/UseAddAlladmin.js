import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";
const UseAddAlladmins = () => {
  const [loading, setLoading] = useState(false);

  const addAlladmins = async (alladmin_data, userData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/api/users/admins/store`,
        { ...alladmin_data , static_role:'admin' },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );
      console.log(response, "all admins admins response");
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

  return { addAlladmins, loading };
};

export default UseAddAlladmins;
