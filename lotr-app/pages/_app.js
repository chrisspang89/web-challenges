import GlobalStyle from "../styles";
import Volumes from "./volumes/overview";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Volumes />
      <GlobalStyle />
    </>
  );
}
