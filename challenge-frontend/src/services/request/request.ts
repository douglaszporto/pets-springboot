import axios, { AxiosResponse } from "axios";
import { v4 as uuid } from '@lukeed/uuid';

export type DefaultRequesSuccess<T = any> = {
    status: string;
    payload: T;
};

export class RequestHandler<Res> {
    data?: Res;
    blob?: ArrayBuffer;
    error?: string;
    status?: number;
    uid?: string;
    headers?: {[k:string]:string}

    constructor() {
        this.data = undefined;
        this.error = undefined;
        this.status = undefined;
        this.uid = uuid();
    }

    get = async (url: string, params?: {[k:string]:any}, rawData?:boolean) => {
        try {
            const res = await axios.get<DefaultRequesSuccess<Res>>(url, params);
            if (params && params.responseType === 'arraybuffer') {
                this.blob = res.data as unknown as ArrayBuffer;
            } else  if (rawData) {
                this.data = res.data as unknown as Res;
            } else {
                this.setData(res);
            }
            this.headers = Object.keys(res.headers).map(k => ({[k]: res.headers[k]})).reduce((a,b) => ({...a, ...b}), {});
        } catch (e) {
            this.setError(e);
        }

        return this;
    }

    post = async (url: string, body: any, params?: {[k:string]:any}) => {
        try {
            if (body instanceof FormData) {
                params = params || {};
                params['headers'] = {'Content-Type': 'multipart/form-data'};
            }
            const res = await axios.post<DefaultRequesSuccess<Res>>(url, body, params);
            this.setData(res);
        } catch (e) {
            this.setError(e);
        }

        return this;
    }

    put = async (url: string, body: any, params?: {[k:string]:any}) => {
        try {
            if (body instanceof FormData) {
                params = params || {};
                params['headers'] = {'Content-Type': 'multipart/form-data'};
            }
            const res = await axios.put<DefaultRequesSuccess<Res>>(url, body, params);
            this.setData(res);
        } catch (e) {
            this.setError(e);
        }

        return this;
    }

    delete = async (url: string, params?: {[k:string]:any}) => {
        try {
            const res = await axios.delete<DefaultRequesSuccess<Res>>(url, params);
            this.setData(res);
        } catch (e) {
            this.setError(e);
        }

        return this;
    }

    setData = (res: AxiosResponse<DefaultRequesSuccess<Res>, any>) => {
        this.status = res.status;
        this.error = undefined;
        this.data = res.data as Res;
    }

    setError = (e:any) => {
        console.log(e);
        this.status = 1000;
        this.error = "error";
        
        if (axios.isAxiosError(e)) {
            try{
                this.status = e.response?.status;
                this.error = e.response?.data?.payload ?? e.response?.data?.error ?? e.message;
            } catch (e:any) {
                this.status = 1000;
                this.error = e.message;
            }
        }
    }
};