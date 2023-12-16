import { AdminAuthMain } from "./adminAuthModel";
import { AdminMain } from "./adminModel";
import { ErrorState } from "./errorModels";
import { LoadingState } from "./loadingModels";
import { TokenMain } from "./tokenModel";

export interface StoreState{
    error: ErrorState;
    loading: LoadingState;
    token: TokenMain;
    adminAuth:AdminAuthMain;
    admin: AdminMain;
}