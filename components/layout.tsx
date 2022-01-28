import { Box } from "@mui/material";
import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Brain</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <main className={styles.main}>{children}</main>
      </Box>
    </>
  );
}
