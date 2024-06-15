import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';
import postReducer from './features/post/postSlice'
import categoryReducer from './features/category/categorySlice'
import notificationReducer from './features/notification/notificationSlice'
import currencyReducer from './features/currency/currencySlice';
import countryReducer from './features/country/countrySlice';
const authPersistConfig = {
  key: 'auth',
  storage: storage,
};
const postPersistConfig = {
  key: 'post',
  storage: storage,
};
const categoryPersistConfig = {
  key: 'category',
  storage: storage,
};
const currrencyPersistConfig={
  key:'currency',
  storage:storage
};
const countryPersistConfig={
  key:"country",
  storage:storage
}
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistPostReducer=persistReducer(postPersistConfig,postReducer)
const persistedCategoryReducer = persistReducer(categoryPersistConfig, categoryReducer);
const persistedCurrencyReducer=persistReducer(currrencyPersistConfig,currencyReducer);
const persistedCountryReducer=persistReducer(countryPersistConfig,countryReducer)
const rootReducer=combineReducers({
  auth: persistedAuthReducer,
  post:persistPostReducer,
  category:persistedCategoryReducer,
  notification:notificationReducer,
  currency:persistedCurrencyReducer,
  country:persistedCountryReducer
})

export const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
