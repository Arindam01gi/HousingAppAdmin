import { ErrorState } from "./errorModels";
import { LoadingState } from "./loadingModels";

export interface StoreState{
    error: ErrorState;
    loading: LoadingState;
}