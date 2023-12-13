import { configureStore } from '@reduxjs/toolkit'
import { StoreState } from "../model/reduxModels";
import rootReducer from "./reducers";
// import {createLogger} from 'redux-logger';

export default function ConfigureStore(initialState?: StoreState) {
    // const logger = createLogger();
    return configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
      middleware: getDefaultMiddleware => getDefaultMiddleware(),
      devTools: process.env.NODE_ENV !== "production",
    });
  }
  