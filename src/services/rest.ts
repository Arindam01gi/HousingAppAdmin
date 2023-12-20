import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { SetRefTokenAction, SetTokenAction } from "../store/actions/apiStatusActions";
import { stores } from "../index";
import { UserLogoutSuccess } from "../store/actions/adminAuthActions";
import { environment } from "../environment";

// export const stores = ConfigureStore();
const baseURL = "http://13.126.110.99:8000/"
// const baseURL = "http://127.0.0.1:8000/api/"

export default class RestService {
  client: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);
    this.client.interceptors.request.use(
      async (config) => {
        const token = await getToken();
    
        if (token && !!config.headers) {
          config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      async (response) => {
        if (response?.data?.access) {
          await setToken(response?.data?.access);
          this.client.defaults.headers.common["Authorization"] =
            "Bearer " + response?.data?.access;
        }
        return response;
      },
      async (error) => {        
        const originalRequest = error?.config;
        if (
          error?.response?.status === 401 
          // &&
          // error?.response?.data.messages[0].message === "Token 'exp' claim has expired"
        ) { 
          originalRequest._retry = true;
          const token = await refreshToken();          
          if (!!token && token.status === 200) {
            this.client.defaults.headers.common["Authorization"] =
              "Bearer " + token.data.access;
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return this.client(originalRequest);
          } else {            
            //logout
            // stores.logout();
            stores.dispatch(UserLogoutSuccess());
            // router.push({ name: "login" });
            window.location.replace('/login')
            await new Promise((resolve) => setTimeout(resolve, 500));
            return this.client(originalRequest);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  get(endpoint: string, headers?: any) {
    return this.client.get<any>(endpoint, { headers: headers });
  }

  post(endpoint: string, payload: any, headers?: any) {
    return this.client.post<any>(endpoint, payload, { headers: headers });
  }
  put(endpoint: string, payload: any) {
    return this.client.put<any>(endpoint, payload);
  }
}

const getToken = async (): Promise<string | null | undefined> => {
  return stores.getState().token.access;
};

const setToken = async (token: string) => {
    stores.dispatch(SetTokenAction(token));
};

const setRefToken = async (token: string) => {
  stores.dispatch(SetRefTokenAction(token));
};




const refreshToken = async () => {
  let refreshTokenLogin = stores.getState().token.refresh;
  console.log(refreshTokenLogin)
  let tokenRes:any;
  try{
    tokenRes = await axios.post(
      baseURL.concat(environment.urls.refreshTokenUrl),
      {
        refresh_token: refreshTokenLogin,
      },
      {
        headers: {
          // Authorization: "Bearer " + userStore.accessToken,
          "Content-Type": "application/json; charset=UTF-8",
          // realm: userStore.realm,
        },
      }
    );
  }catch(e){
    stores.dispatch(UserLogoutSuccess());
    // router.push({ name: "login" });
    window.location.replace('/login')
    await new Promise((resolve) => setTimeout(resolve, 500));
  }  
  // userStore.saveNewRefToken(tokenRes.data);
  setRefToken(tokenRes.data.refresh)
  return tokenRes;
};


