/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from 'theme-ui'
import { theme } from '@/theme'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from '@/components/Toaster';
import { DefaultSeo } from 'next-seo';
import SEO from '@/config/next-seo'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeUIProvider theme={theme}>
        <Component {...pageProps} />;
        <Toaster />
      </ThemeUIProvider>
      <GoogleAnalytics gaId={'G-R8GXC1VL09'} />
    </>

  );
}
