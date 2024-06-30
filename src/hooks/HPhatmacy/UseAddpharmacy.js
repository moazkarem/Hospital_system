import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseAddPharmacy = () => {
    const [loading, setLoading] = useState(false);
  
    const addPharmacy = async (pharmaData, userData) => {
      setLoading(true);
      try {
        const response = await axiosInstance.post(
          `/api/pharmacies/store`,
          { ...pharmaData },
          {
            headers: { Authorization: `Bearer ${userData.data.access_token}` },
          }
        );
        console.log(response , 'pharma res');
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
  
    return { addPharmacy, loading };
  };
  
  export default UseAddPharmacy;