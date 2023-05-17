import "@/styles/globals.scss";
import { defaultMetaData } from "@/utils/constants";
import MainLayout from "../Layouts/MainLayout";

export default function App({ Component, pageProps }) {
  const metaData = Component.metaData || defaultMetaData;
  const getLayout =
    Component.getLayout ||
    ((page) => <MainLayout metaData={metaData}>{page}</MainLayout>);

  return getLayout(<Component {...pageProps} />);
}
