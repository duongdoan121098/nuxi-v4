export type UrlType =
    | string
    | Request
    | Ref<string | Request>
    | (() => string | Request);

export interface RequestOptions {
    method?: any;
    params?: any;
}

export interface Response<T> {
    data: T;
    message: string;
    status: number;
    success: boolean;
}