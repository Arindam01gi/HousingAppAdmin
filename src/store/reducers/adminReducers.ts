import { AdminMain } from "../../model/adminModel";
import { AdminActionTypes } from "../actions/adminActions";
import InitialState from "./initialState";

const initialState: AdminMain = InitialState.admin;

export default function adminReducer(
    state: AdminMain = initialState,
    action: any
  ) {
    switch (action.type) {
        case AdminActionTypes.Get_Notice_Success_Action:
            return { ...state, notices: action.payload };
        default:
            return state;
    }
  }