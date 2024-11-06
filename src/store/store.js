import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer: {
        user: persistedReducer
    }
});

export const persistor = persistStore(store);
export default store;