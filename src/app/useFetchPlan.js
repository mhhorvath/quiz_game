import { useState, useCallback } from "react";
import AxiosInstance from "./AxiosInstance";

const useFetchPlan = () => {
    const endpoint = "closest"

    const postData = async(data) =>{
        try {
            const response = await AxiosInstance.post(`${endpoint}`, data);
            return response.data
        } catch(err){
            console.error("Error updating data:", err);
            throw err;
        }
    };

  return {postData};
};

export default useFetchPlan;
