import { useEffect, useState } from "react";
import {ProductsQueryResponse} from "../../types/Index";
import axiosInstance from "../../libs/axios/Index";

export const useQueryProducts = () => {
  const [state, setState] = useState<ProductsQueryResponse>({
    data: null,
  });

  const refetch = async () => {
    try {
      const response = await axiosInstance.get("/product");
      console.log(response);
      setState({
        data: response.data.data,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isError: error instanceof Error ? error : new Error("Unknown error"),
      }));
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };
  useEffect(() => {
    refetch();
  }, []);

  return {
    ...state,
    refetch,
  };
};
