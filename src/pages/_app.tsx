/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from 'theme-ui'
import { theme } from '@/theme'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from '@/components/Toaster';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />;
      <Toaster/>
    </ThemeUIProvider>
  );
}
