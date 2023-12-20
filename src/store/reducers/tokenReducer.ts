import { TokenMain } from "../../model/tokenModel";
import { ApiStatusActionTypes } from "../actions/apiStatusActions";
import InitialState from "./initialState";

const initialState: TokenMain = InitialState.token;

export default function TokenReducer(
  state: TokenMain = initialState,
  action: any
) {
  switch (action.type) {
    case ApiStatusActionTypes.Set_Token:
      console.log("Access: ",action.payload)
      return { ...state, access: action.payload };
      case ApiStatusActionTypes.Set_Ref_Token:
      console.log("Refresh: ",action.payload)
      return { ...state, refresh: action.payload };
    default:
      return state;
  }
}