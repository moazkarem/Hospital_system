import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseEditDoctorData = () => {
  const [loading, setLoading] = useState(false);
  const editDoctorData = async (editDoctor, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/users/staff/${editDoctor.id}/update`,
        { ...editDoctor },
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
  return { editDoctorData, loading };
};
export default UseEditDoctorData;
