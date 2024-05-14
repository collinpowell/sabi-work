/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from 'theme-ui'
import { theme } from '@/theme'
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeUIProvider>
  );
}
