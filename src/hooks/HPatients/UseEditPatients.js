import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseEditPatientsData = () => {
  const [loading, setLoading] = useState(false);
  const editPatientData = async (editPatients, userData) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(
        `/api/users/patients/${editPatients.id}/update`,
        { ...editPatients },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );

      return { success: res.status === 200 };
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  return { editPatientData, loading };
};
export default UseEditPatientsData;
