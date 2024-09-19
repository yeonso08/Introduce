import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/layout/Navbar'
import {Analytics} from "@vercel/analytics/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Analytics />
      <Navbar />
      <Component {...pageProps} />
    </>
  )}
