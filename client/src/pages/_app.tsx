import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/responsive.css";
import "@/styles/modal.css";
import "@/styles/notification.css";
import "@/styles/home.css";
import "@/styles/sidebar.css";
import "@/styles/footer.css";
import "@/styles/product_detail.css";
import "@/styles/cart.css";
import "@/styles/login.css";
import "@/styles/skeletons.css"
import "@/styles/fetcherror.css"
import "@/styles/checkout.css"
import "@/styles/success.css"
import { Toaster } from 'react-hot-toast'

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/store";
import AuthLayout from "@/lib/AuthLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
      <Toaster position='top-right'/>
        <AuthLayout>
        <Component {...pageProps} />
        </AuthLayout>
      </Layout>
    </Provider>
  );
}
