import { combineReducers } from "redux";
import ErrorReducer from "./errorReducer";
import LoadingReducer from "./loadingReducer";
import TokenReducer from "./tokenReducer";
import adminAuthReducer from "./adminAuthReducer";
import adminReducer from "./adminReducers";

const rootReducer = combineReducers({
    loading: LoadingReducer,
    error: ErrorReducer,
    token: TokenReducer,
    adminAuth:adminAuthReducer,
    admin:adminReducer,
});
export default rootReducer;