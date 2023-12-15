import { AdminAuthMain } from "../../model/adminAuthModel";
import { AdminLoginService } from "../../services/adminAuthServices";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";

export enum AdminAuthActionTypes {
    Admin_Login_Success_Action = "[ADMIN_AUTH] Login for admin success",
    Admin_Logout_Success_Action = "[ADMIN_AUTH] Logout for admin success"
}
export const LoginAction = (payload: any) => {
    return (dispatch:any, getState: any) => {
        dispatch(
            BeginApiCallAction({
              count: 1,
              message: 'Signing In. Please Wait.',
            }),
          );
        return AdminLoginService(payload)
        .then(response => {
            dispatch(LoginSuccessAction(response.data));
            // navigation.navigate("home");
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

export const  LoginSuccessAction = (payload:AdminAuthMain) => {
    // showToast('Login successful.', 'rgba(0, 0, 0, 0.7)');
    return {type: AdminAuthActionTypes.Admin_Login_Success_Action,payload:payload}
}

export const UserLogoutSuccess = () => {
    return {
      type: AdminAuthActionTypes.Admin_Logout_Success_Action,
    };
};