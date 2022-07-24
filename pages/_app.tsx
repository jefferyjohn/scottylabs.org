import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MyApp({ Component, pageProps }: AppProps) {
  library.add(faBars);
  return <Component {...pageProps} />;
}

export default MyApp;
