import "../styles/globals.css";

import Layout from "@/components/layout/layout";
import { LoadMoreContextProvider } from "@/context/loadMore-context";
import { AddToCartContextProvider } from "@/context/addToCart-content";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LoadMoreContextProvider>
        <AddToCartContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AddToCartContextProvider>
      </LoadMoreContextProvider>
    </>
  );
}
