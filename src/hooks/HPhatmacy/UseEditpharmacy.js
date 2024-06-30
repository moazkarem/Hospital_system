import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseEditPharma = () => {
  const [loading, setLoading] = useState(false);
  const editPharmacy = async (editPharma, userData) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post(
        `/api/pharmacies/${editPharma.id}/update`,
        { ...editPharma },
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
  return { editPharmacy, loading };
};
export default UseEditPharma;
