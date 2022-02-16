// import App from 'next/app'

import { AppContextProvider } from "../components/AppContext"



function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp