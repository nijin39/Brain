import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
