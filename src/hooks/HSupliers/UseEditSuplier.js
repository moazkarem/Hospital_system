import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseEditSuplierData = () => {
  const [loading, setLoading] = useState(false);
  const editSuplierData = async (editSuplier, userData) => {
    setLoading(true);
    try {
      const res= await axiosInstance.post(
        `/api/users/suppliers/${editSuplier.id}/update`,
        { ...editSuplier },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );
      console.log(res , 'edddd');
      return { success: res.status === 200 };
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  return { editSuplierData, loading };
};
export default UseEditSuplierData;
