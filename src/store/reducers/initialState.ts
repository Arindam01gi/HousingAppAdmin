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
    loginResponse: undefined
  },
  admin: {
    notices: []
  }
}

export default InitialState;