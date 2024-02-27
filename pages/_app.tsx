import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import '../global.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import countrySlice from '../redux-setup/countrySlice'
import authSlice from '../redux-setup/authSlice'
import cartSlice from '../redux-setup/cartSlice'
import filterSlice from '../redux-setup/FiltersSlice'
import tokenReducer from '../redux-setup/tokenSlice'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
builder.init(builderConfig.apiKey)

const combinedReducer = combineReducers({
  country: countrySlice,
  auth: authSlice,
  filter: filterSlice,
  token: tokenReducer,
  cart: cartSlice,
})

const persistConfig = { key: 'root', storage, version: 1 }
const persistedReducer = persistReducer(persistConfig, combinedReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <Component {...pageProps} suppressHydrationWarning />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </div>
  )
}
