import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app"
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
