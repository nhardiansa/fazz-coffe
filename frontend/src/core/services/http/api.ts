import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

// Membuat instance Axios
const api: AxiosInstance = axios.create({
  baseURL: "https://example.com/api", // Ganti dengan base URL API Anda
  timeout: 5000, // Timeout dalam milidetik
});

// Interceptor untuk menangani request sebelum dikirim
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Melakukan modifikasi pada config jika diperlukan (tambahan header, dll.)
    return config;
  },
  (error) => {
    // Menangani kesalahan pada request
    return Promise.reject(error);
  }
);

// Interceptor untuk menangani response setelah diterima
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Menangani response yang berhasil
    return response;
  },
  (error: AxiosError) => {
    // Menangani kesalahan pada response
    return Promise.reject(error);
  }
);

export default api;
