import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';
import postReducer from './features/post/postSlice'
import notificationReducer from './features/notification/notificationSlice'
const authPersistConfig = {
  key: 'auth',
  storage: storage,
};
const postPersistConfig = {
  key: 'post',
  storage: storage,
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistPostReducer=persistReducer(postPersistConfig,postReducer)
const rootReducer=combineReducers({
  auth: persistedAuthReducer,
  post:persistPostReducer,
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
