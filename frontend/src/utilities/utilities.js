import { useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";

export const useApi = (endpoint) => {
  const [data, setData] = useState(null);

  async function getData() {
    let response = await AxiosInstance.get(endpoint);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, [endpoint]);

  return data
};
