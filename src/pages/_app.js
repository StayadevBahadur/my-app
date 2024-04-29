import "@/styles/globals.css";
import Navbar from "./navbar";
import React from 'react';

export default function App({ Component, pageProps }) {
  return<React.StrictMode><>
  <Navbar  {...pageProps}/>
  <Component {...pageProps} />
  </>
  </React.StrictMode>;
}
