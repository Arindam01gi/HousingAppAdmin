import { ErrorModel } from "../../model/errorModels";
import { LoadingPayload } from "../../model/loadingModels";


export enum ApiStatusActionTypes {
    Begin_Api_Call = "[API_STATUS] Begin Api Call Action",
    Api_Call_Error = "[API_STATUS] Api Call Error Action",
    Api_Call_Success = '[API_STATUS] Api Call Success Action',
    Loading_Stop_Success = '[API_STATUS] Loading Stop Success',
    Set_Token = "[API_STATUS] Set Token Success Action",
    Set_Ref_Token = "[API_STATUS] Set Ref Token Success Action"
}

export const BeginApiCallAction = (payload: LoadingPayload) => {
  return {type: ApiStatusActionTypes.Begin_Api_Call, payload: payload};
};
export const ApiCallErrorAction = (payload: ErrorModel) => {
  return {type: ApiStatusActionTypes.Api_Call_Error, payload: payload};
};
export const ApiCallSuccessAction = () => {
  return {type: ApiStatusActionTypes.Api_Call_Success};
};
export const LoadingStopAction = () => {
  return {type: ApiStatusActionTypes.Loading_Stop_Success};
};
export const SetTokenAction = (payload: any) => {
  return { type: ApiStatusActionTypes.Set_Token, payload: payload };
};
export const SetRefTokenAction = (payload: any) => {
  return { type: ApiStatusActionTypes.Set_Ref_Token, payload: payload };
};

