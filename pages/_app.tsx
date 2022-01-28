import "../styles/globals.css";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(
    <AmplifyAuthenticator>
      <Component {...pageProps} />
    </AmplifyAuthenticator>
  );
}
