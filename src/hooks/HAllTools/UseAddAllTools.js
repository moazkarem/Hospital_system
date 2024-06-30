import { useState } from "react";
import { axiosInstance } from "../../config/axios.config";
const UseAddTool = () => {
    const [loading, setLoading] = useState(false);
  
    const addToolData = async (toolData, userData) => {
      setLoading(true);
      try {
        const response = await axiosInstance.post(
          `/api/tools/store`,
          { ...toolData },
          {
            headers: { Authorization: `Bearer ${userData.data.access_token}` },
          }
        );
        console.log(response );
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
  
    return { addToolData, loading };
  };
  
  export default UseAddTool;