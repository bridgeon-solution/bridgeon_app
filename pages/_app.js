import { Provider } from "react-redux";
import { wrapper } from "../redux/storeConfig";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts/Layout";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const theme = useTheme();
  let matches = true;
  // matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Provider store={store}>
      {matches ? (
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      ) : (
        "please"
      )}
    </Provider>
  );
}
