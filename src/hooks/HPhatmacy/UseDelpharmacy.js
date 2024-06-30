import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";

const UseDelPharmacy = () => {
  const [loading, setLoading] = useState(false);

  const delPharmacy = async (pharmaId, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.delete(
        `/api/pharmacies/${pharmaId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${userData.data.access_token}`,
          },
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

  return { delPharmacy, loading };
};

export default UseDelPharmacy;