import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from '@ui-kit'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <ThemeProvider>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default App
