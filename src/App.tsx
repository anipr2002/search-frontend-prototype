import Settings from "./components/Settings";
import { ModalProvider } from "./providers/modal-provider";
const App = () => {
  return (
    <>
      <ModalProvider />
      <Settings />
    </>
  );
};

export default App;
