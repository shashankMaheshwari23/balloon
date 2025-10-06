import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

export interface RequestParams {
  data?: any;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  timeout?: number;
  shouldTrimData?: boolean;
  shouldRemoveData?: boolean;
}

const getApiUrl = (endPoint: string): string => {
  return `https://product-service-test.dezensolutions.com/${endPoint}`;
};

export const getCookieHeader = (cookie?: string): Record<string, string> => (cookie ? { Cookie: cookie } : {});

export const createRequestModule = () => {
  const axiosInstance: AxiosInstance = axios.create();

  const makeRequest =
    ({ method }: { method: Method }) =>
    (
      endpoint: string,
      {
        data = {},
        headers = {},
        params = {},
        timeout = 0,
        shouldTrimData = true,
        shouldRemoveData = false,
        ...options
      }: RequestParams = {},
    ) => {
      const config: AxiosRequestConfig = {
        method,
        url: getApiUrl(endpoint),
        ...(!shouldRemoveData ? { data: data } : {}),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
        params,
        timeout,
        ...options,
      };

      return axiosInstance(config);
    };

  return {
    get: makeRequest({ method: 'get' }),
    patch: makeRequest({ method: 'patch' }),
    post: makeRequest({ method: 'post' }),
    delete: makeRequest({ method: 'delete' }),
    put: makeRequest({ method: 'put' }),
    axiosInstance,
  };
};

export default createRequestModule();