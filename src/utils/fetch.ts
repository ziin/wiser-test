import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface AxiosReturn<T> {
  response?: AxiosResponse<T>;
  error?: AxiosResponse<unknown>;
}

export async function fetch<T>(
  config: AxiosRequestConfig
): Promise<AxiosReturn<T>> {
  try {
    const request = {
      ...config,
      headers: {
        ...(config.headers ? config.headers : {}),
      },
    };
    const response = await axios(request);
    return {
      response: {
        ...(response || {
          config,
          status: 500,
          data: "",
          headers: "",
          statusText: "",
        }),
      },
    };
  } catch (error) {
    return {
      error: {
        ...(error.response || { status: 500, data: error, variant: "error" }),
      },
    };
  }
}
