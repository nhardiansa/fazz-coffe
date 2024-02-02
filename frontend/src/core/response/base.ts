export interface BaseResponse<T, E> {
  success: boolean;
  message: string;
  result?: T;
  error?: E;
}
