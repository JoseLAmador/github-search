import { useRef } from "react";
import { Hydrate, QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"
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
  const queryClient = useRef(new QueryClient());

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <QueryClientProvider client={queryClient?.current}>
      <Hydrate state={pageProps?.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default MyApp;
