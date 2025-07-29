import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";


createRoot(document.getElementById("root")).render(
  <>
    <div className="container">
      <Header />
      <Main />
    </div>
  </>
);
