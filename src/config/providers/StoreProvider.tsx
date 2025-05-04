import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { persistor, store } from "@config/store/store";
import { PersistGate } from "redux-persist/integration/react";

export function StoreProvider({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
