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
      console.log(action.payload)
      return { ...state, access: action.payload };
    default:
      return state;
  }
}