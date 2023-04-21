import "@/styles/globals.css";
import Layout from "@/components/layout";

//Responsible for rendering all of my pages by passing component and page props
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
