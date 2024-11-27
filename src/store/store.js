import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";

// Configuration object for redux-persist
const persistConfig = {
    key: "root",  
    storage  
};

// Create a persisted reducer using the userReducer and persistConfig
const persistedReducer = persistReducer(persistConfig, userReducer);

// Configure the Redux store with the persisted reducer
const store = configureStore({
    reducer: {
        user: persistedReducer  
    }
});

// Create a persistor linked to the store to manage persistence
export const persistor = persistStore(store);

// Export the configured store as the default export
export default store;