import { baseUrl, environment } from "../environment";
import RestService from "./rest";

export const serviceClient = new RestService({
    baseURL: baseUrl,
});
export const AdminLoginService = (payload: any) => {
    return serviceClient.post(environment.urls.admin_login, payload);
};