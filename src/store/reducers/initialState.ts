import { StoreState } from "../../model/reduxModels";

const InitialState: StoreState = {
  loading: {
    count: 0,
    message: ''
  },
  error: {
    error: undefined,
  },
  token: {
    access: undefined,
    refresh: undefined
  },
  adminAuth: {
    loginResponse:undefined
  }
}

export default InitialState;