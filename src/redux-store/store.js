import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';
import notificationReducer from './features/notification/notificationSlice'
const authPersistConfig = {
  key: 'auth',
  storage: storage,
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer=combineReducers({
  auth: persistedAuthReducer,
  notification:notificationReducer 
})

export const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
