import { Provider } from "react-redux";
import { store } from "../redux/storeConfig";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts/Layout";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
 
  let matches = useMediaQuery("(min-width:728px)");

  return (
    <Provider store={store()}>
      {matches ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>
              ⚠Your device resolution is not 🚫supported please try from another
              device which have more wide
            </h3>
          </div> 
        </>
      )}
    </Provider>
  );
}
