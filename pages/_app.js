import { Provider } from "react-redux";
import { wrapper } from "../redux/storeConfig";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts/Layout";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}
