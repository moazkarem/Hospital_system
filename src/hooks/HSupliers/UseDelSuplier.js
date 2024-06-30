import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";

const UseDeleteSuplier = () => {
  const [loading, setLoading] = useState(false);

  const deleteSuplierData = async (suplierId, userData) => {
    setLoading(true);
    try {
      const res= await axiosInstance.delete(
        `/api/users/suppliers/${suplierId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${userData.data.access_token}`,
          },
        }
      );
      console.log(res , 'dele');
      return { success: res.status === 200 };
    } catch (error) {
        console.log(error);
        const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred.";
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { deleteSuplierData, loading };
};

export default UseDeleteSuplier;