import { baseUrl, environment } from "../environment";
import RestService from "./rest";

export const serviceClient = new RestService({
    baseURL: baseUrl,
});
export const GetSocietySpecificNotice = () => {
    return serviceClient.get(environment.urls.admin_notice);
};