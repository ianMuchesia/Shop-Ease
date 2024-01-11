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
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
