const enviroment:{[v:string]:string} = import.meta.env;
  
export const env = {
    ...enviroment,
    VITE_API_URL: String(enviroment.VITE_API_URL ?? "") || "",
    VITE_APP_URL: String(enviroment.VITE_APP_URL ?? "") || "",
    VITE_APP_RELATIVE_URL: String(enviroment.VITE_APP_RELATIVE_URL ?? "").substring(1) || "",
};