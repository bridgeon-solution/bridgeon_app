import { wrapper } from '../store/storeConfig'
import '../styles/globals.scss'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)