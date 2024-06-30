import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseAddPatients = () => {
    const [loading, setLoading] = useState(false);
  
    const addPatientData = async (patientData, userData) => {
      setLoading(true);
      try {
        const response = await axiosInstance.post(
          `/api/users/patients/store`,
          { ...patientData},
          {
            headers: { Authorization: `Bearer ${userData.data.access_token}` },
          }
        );
     
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
  
    return { addPatientData, loading };
  };
  
  export default UseAddPatients;