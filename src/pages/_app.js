import "@/styles/hero.css";
import "@/styles/globals.css";
import "@/styles/loader.css";
import "@/styles/card.css";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import LoadingPage from "@/components/Loading";

//Responsible for rendering all of my pages by passing component and page props
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change this value to set the duration of the loading page

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
