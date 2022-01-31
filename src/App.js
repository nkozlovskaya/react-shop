import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Shop } from "./layout/Shop";
import { ContextProvider } from "./context";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
