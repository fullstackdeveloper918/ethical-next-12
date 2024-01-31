import type { AppProps } from 'next/app'
import { store } from '../redux-setup/store'
import { Provider } from 'react-redux'
import { builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <Component {...pageProps} suppressHydrationWarning />
      </Provider>
    </div>
  )
}
