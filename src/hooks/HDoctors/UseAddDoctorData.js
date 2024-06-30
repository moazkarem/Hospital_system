import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";

const UseAddDoctorData = () => {
  const [loading, setLoading] = useState(false);

  const addDoctorData = async (doctorData, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/users/staff/store`,
        { ...doctorData, static_role: "doctor" },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );

      if (status) {
        return { success: true };
      }
    } catch (error) {
      const errorMessage =
      error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { addDoctorData, loading };
};

export default UseAddDoctorData;
