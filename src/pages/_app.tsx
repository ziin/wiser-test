import type { AppProps } from "next/app";
import { StylesProvider } from "@styles";
import { Provider } from "react-redux";
import { store } from "@store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StylesProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </StylesProvider>
    </Provider>
  );
}

export default MyApp;
