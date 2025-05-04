import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { persistReducer, persistStore } from "redux-persist";

import { jobsApi } from "@entities/jobs/api/jobsApi";
import { profileApi } from "@entities/profile/api/profileApi";

import generalReducer from "./generalSlice";

const rootReducer = combineReducers({
  [jobsApi.reducerPath]: jobsApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  general: generalReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["general"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(jobsApi.middleware)
      .concat(profileApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
