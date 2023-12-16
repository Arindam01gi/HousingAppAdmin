import { GetSocietySpecificNotice } from "../../services/adminServices";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";

export enum AdminActionTypes {
    Get_Notice_Success_Action = "[ADMIN] Get notice success action",
}
export const GetNotice = () => {
    return (dispatch:any, getState: any) => {
        dispatch(
            BeginApiCallAction({
              count: 1,
              message: 'Getting notices. Please wait....',
            }),
          );
        return GetSocietySpecificNotice()
        .then(response => {
            dispatch(GetSocietySpecificNoticeSuccessAction(response.data));
        })
        .catch(error => {
            console.log(error)
            // if (
            //   error?.response?.status === 401 ||
            //   error?.response?.status === 403
            // ) {
            //   ApiCallErrorAction(),
            //   dispatch(UserLogoutSuccess());
            //   AsyncStorage.multiRemove(['userData', 'token']);
            // } 
            
            if (error?.response?.status === 500) {
              console.log("error occued")
              dispatch(
                ApiCallErrorAction({
                  status:error.response.data.status
                }),
              );
            } else {
              dispatch(
                ApiCallErrorAction({
                    status:"Error Ocurred"
                }),
              );
            }
          });
    }
}

export const  GetSocietySpecificNoticeSuccessAction = (payload:any) => {
    // showToast('Login successful.', 'rgba(0, 0, 0, 0.7)');
    return {type: AdminActionTypes.Get_Notice_Success_Action,payload:payload}
}

