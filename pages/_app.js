import "@/styles/globals.css";
import { Toaster } from 'sonner'
import Footers from "@/components/Footers";

export default function App({ Component, pageProps }) {
  return  (
    <>
      <Toaster />
      <Component {...pageProps} />
      <Footers />
    </>
  
  )
}
