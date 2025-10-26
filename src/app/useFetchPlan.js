import { useState, useCallback } from "react";
import AxiosInstance from "./AxiosInstance";

const useFetchPlan = () => {
    const endpoint = "closest"
    const [data, setData] = useState(null);

    const postData = async(data) =>{
        try {
            const response = await AxiosInstance.post(`${endpoint}`, data);
            return response.data
        } catch(err){
            console.error("Error updating data:", err);
            throw err;
        }
    };

  return {data, postData};
};

export default useFetchPlan;
