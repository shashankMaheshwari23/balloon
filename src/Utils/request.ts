import axios from 'axios'

export interface RequestParams {
  data?: any
  headers?: any
  params?: any
  timeout?: number
  shouldTrimData?: boolean
  shouldRemoveData?: boolean
}




const getApiUrl = (endPoint: string) => {
    return `https://product-service-test.dezensolutions.com/${endPoint}`
  }

export const getCookieHeader = (cookie?: string): Object => (cookie ? { Cookie: cookie } : {})

export const createRequestModule = () => {
  const axiosInstance = axios.create()
  const makeRequest =
    ({ method }) =>
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
      return axiosInstance({
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
      })
    }

  return {
    get: makeRequest({ method: 'get' }),
    patch: makeRequest({ method: 'patch' }),
    post: makeRequest({ method: 'post' }),
    delete: makeRequest({ method: 'delete' }),
    put: makeRequest({ method: 'put' }),
    axiosInstance,
  }
}

export default createRequestModule()
