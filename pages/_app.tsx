import React from "react";
import { AppProps } from "next/app";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import '@public/styles/header.scss'
import '@public/styles/card.scss'
import '@public/styles/pagination.scss'
import '@public/styles/detail.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
