import { combineReducers } from "redux";
import ErrorReducer from "./errorReducer";
import LoadingReducer from "./loadingReducer";
import TokenReducer from "./tokenReducer";
import adminAuthReducer from "./adminAuthReducer";

const rootReducer = combineReducers({
    loading: LoadingReducer,
    error: ErrorReducer,
    token: TokenReducer,
    adminAuth:adminAuthReducer,
});
export default rootReducer;