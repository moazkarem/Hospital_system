import { useState } from "react";
import { axiosInstance } from "../../../config/axios.config";
const UseAddLabpatients = () => {
  const [loading, setLoading] = useState(false);

  const addLabPatients = async (labPatientstData, userData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/api/lab/add-patient`,
        { ...labPatientstData },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );
      console.log(response, "add lab tools");
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

  return { addLabPatients, loading };
};

export default UseAddLabpatients;
