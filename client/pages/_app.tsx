import AppLayout from "../components/layout/AppLayout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { AuthProvider } from "../contexts/auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SessionProvider session={pageProps.session}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SessionProvider>
    </AuthProvider>
  );
}

export default MyApp;
