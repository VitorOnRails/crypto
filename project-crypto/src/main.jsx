import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "./index.css"
import { Provider } from "./provider";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { tema } from "./theme/Tema";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider theme={tema}>
      <App />
    </Provider>
  </StrictMode>
)