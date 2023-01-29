import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { Provider } from 'react-redux'
import { Nunito } from "@next/font/google";
import { useStore } from 'redux/store'
import Layout from '@/common/layout/Layout'

import 'styles/index.scss';
import { ICssDoodle } from "@/interfaces";

// for css doodle
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'css-doodle': ICssDoodle
    }
  }
}

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});


export default function MyApp ({
  Component,
  pageProps
}: AppProps) {
  const store = useStore(pageProps.state);
  
  return (
    <Provider store={store}>
      <style jsx global>
        {`
          :root {
            --font-nunito: ${nunito.style.fontFamily};
          }
        `}
      </style>
      <Layout>
          <Component {...pageProps} />
      </Layout>
      <Analytics />
    </Provider>
  )
}
