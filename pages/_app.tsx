import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import Layout from '../Components/Layout'
import { CssBaseline } from '@material-ui/core'

const _app = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Layout auth={true}>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default _app
