import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseAddSuplier = () => {
    const [loading, setLoading] = useState(false);
  
    const addSuplierData = async (suplierData, userData) => {
      setLoading(true);
      try {
        const response = await axiosInstance.post(
          `/api/users/suppliers/store`,
          { ...suplierData },
          {
            headers: { Authorization: `Bearer ${userData.data.access_token}` },
          }
        );
        console.log(response , 'supliers');
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
  
    return { addSuplierData, loading };
  };
  
  export default UseAddSuplier;