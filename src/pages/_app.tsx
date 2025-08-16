import Layout from "@/components/layout";
import { FontProvider } from "@/providers";
import "react-day-picker/style.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FontProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FontProvider>
  );
}
