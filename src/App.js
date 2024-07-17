import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createContext } from "react";
import { useContext } from "react";
import GPTContext from "./utils/createContext";
import { useState } from "react";

function App() {
  const [contextName, changeContextName] = useState(false);
  return (
    <Provider store={appStore}>
      <GPTContext.Provider
        value={{ isGPT:contextName, changeContextName }}
      >
        <Body />
      </GPTContext.Provider>
    </Provider>
  );
}

export default App;

