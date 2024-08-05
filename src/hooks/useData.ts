import { AxiosError, AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  deps?: any[],
  requestConfig?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const genres = await apiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          });
          setData(genres.data.results);
        } catch (error) {
          if (error instanceof CanceledError) return;
          setError((error as AxiosError).message);
        }
        setIsLoading(false);
      };
      fetchData();
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
