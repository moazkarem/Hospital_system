import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";

const UseDeleteAlladmin = () => {
  const [loading, setLoading] = useState(false);

  const deleteAlladminData = async (alladminId, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.delete(
        `/api/users/admins/${alladminId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${userData.data.access_token}`,
          },
        }
      );
      console.log('all amins delee');
      return { success: status === 200 };
    } catch (error) {
        const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { deleteAlladminData, loading };
};

export default UseDeleteAlladmin;