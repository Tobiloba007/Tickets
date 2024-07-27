import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authentication/AuthSlice";
import storage from "redux-persist/lib/storage"
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from "redux-persist";


  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
const rootReducer= combineReducers({
    auth: authReducer,
})
  const persistedReducer=persistReducer(persistConfig,rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        })
});

export let persistor=persistStore(store)
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export default store;