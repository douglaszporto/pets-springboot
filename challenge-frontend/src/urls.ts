import { env } from './constants';

export const baseURL = env.VITE_API_URL;

declare global {
    interface Window {
        baseURL: string;
    }
}

window.baseURL = env.VITE_APP_URL;

export default {
    animals: {
        resource: baseURL + '/animals',
        data: (id:string) => `${baseURL}/animals/${id}`,
        adopt: (id:string) => `${baseURL}/animals/${id}/adopt`,
    },
};