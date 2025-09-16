import { useQuery, useMutation } from "@tanstack/react-query";
import axiosClient from ".././lib/axiosClient";

const fetcher = async ({ url, method = "GET", data, params, headers }) => {
  try {
    const res = await axiosClient({ url, method, data, params, headers });
    return res.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw error;
  }
};

export const useFetch = ({
  key,
  url,
  method = "GET",
  data = null,
  params = null,
  headers = null,
  enabled = true,
  cacheTime = 5 * 60 * 1000,
  staleTime = 0,
  refetchOnWindowFocus = false,
  
}) => {
  const isGet = method.toUpperCase() === "GET";

  if (isGet) {
    return useQuery({
      queryKey: [key, params],
      queryFn: () => fetcher({ url, method, params, headers }),
      enabled,
      cacheTime,
      refetchOnWindowFocus,
      staleTime,
      
    });
  } else {
    return useMutation({
      mutationFn: (mutationData) =>
        fetcher({ url, method, data: mutationData, params, headers }),
    });
  }
};
