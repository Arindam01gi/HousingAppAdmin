import { AdminAuthMain } from "../../model/adminAuthModel";
import { AdminAuthActionTypes } from "../actions/adminAuthActions";
import InitialState from "./initialState";

const initialState: AdminAuthMain = InitialState.adminAuth;

export default function LoadingReducer(
    state: AdminAuthMain = initialState,
    action: any
  ) {
    switch (action.type) {
        case AdminAuthActionTypes.Admin_Login_Success_Action:   
          return {...state, loginResponse: action.payload}
        case AdminAuthActionTypes.Admin_Logout_Success_Action:
            return {...state, loginResponse: undefined};
        default:
            return state;
    }
  }