import "../styles/globals.css";

import Layout from "@/components/layout/layout";
import { LoadMoreContextProvider } from "@/context/loadMore-context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LoadMoreContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadMoreContextProvider>
    </>
  );
}
