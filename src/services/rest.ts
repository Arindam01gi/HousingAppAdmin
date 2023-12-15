import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import ConfigureStore from "../store/configureStore";
import { SetTokenAction } from "../store/actions/apiStatusActions";
import { stores } from "../index";

// export const stores = ConfigureStore();

export default class RestService {
  client: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);
    this.client.interceptors.request.use(
      async (config) => {
        const token = await getToken();
        console.log("token", token);

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
        if (response?.data?.access_token) {
          await setToken(response?.data?.access_token);
          this.client.defaults.headers.common["Authorization"] =
            "Bearer " + response?.data?.access_token;
        }
        return response;
      },
    //   async (error) => {        
    //     const originalRequest = error?.config;
    //     if (
    //       error?.response?.status === 401 &&
    //       error?.response?.data.message === "Signature has expired."
    //     ) { 
    //       originalRequest._retry = true;
    //       const token = await refreshToken();          
    //       if (!!token && token.status === 200) {
    //         this.client.defaults.headers.common["Authorization"] =
    //           "Bearer " + token.data.access_token;
    //         await new Promise((resolve) => setTimeout(resolve, 1000));
    //         return this.client(originalRequest);
    //       } else {            
    //         //logout
    //         stores.logout();
    //         // router.push({ name: "login" });
    //         window.location.replace('/login')
    //         await new Promise((resolve) => setTimeout(resolve, 500));
    //         return this.client(originalRequest);
    //       }
    //     }
    //     return Promise.reject(error);
    //   }
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

// let refreshTokenLogin = ref("");
// refreshTokenLogin = userStore.refreshTokenData;
// const refreshToken = async () => {
//   let tokenRes:any;
//   try{
//     tokenRes = await axios.post(
//       baseURL.concat(BackendRoutes.refreshTokenUrl),
//       {
//         refresh_token: refreshTokenLogin,
//       },
//       {
//         headers: {
//           Authorization: "Bearer " + userStore.accessToken,
//           "Content-Type": "application/json; charset=UTF-8",
//           realm: userStore.realm,
//         },
//       }
//     );
//   }catch(e){
//     userStore.logout();
//     // router.push({ name: "login" });
//     window.location.replace('/login')
//     await new Promise((resolve) => setTimeout(resolve, 500));
//   }  
//   userStore.saveNewRefToken(tokenRes.data);
//   return tokenRes;
// };
