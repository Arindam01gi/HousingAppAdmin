import { StoreState } from "../../model/reduxModels";

const InitialState: StoreState = {
  loading: {
    count: 0,
    message: ''
  },
  error: {
      error: undefined,
  },
}

export default InitialState;