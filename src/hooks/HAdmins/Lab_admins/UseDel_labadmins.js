import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";

const UseDeletelabadmin = () => {
  const [loading, setLoading] = useState(false);

  const deleteLabadminData = async (labadminId, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.delete(
        `/api/users/admins/${labadminId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${userData.data.access_token}`,
          },
        }
      );
      console.log('lab amins delee');
      return { success: status === 200 };
    } catch (error) {
        const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { deleteLabadminData, loading };
};

export default UseDeletelabadmin;