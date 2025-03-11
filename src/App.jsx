import "./style/App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ColorModeProvider } from "./context/ColorModeContext";
import { SidebarProvider } from "./context/SideBarContext";

function App() {
  return (
    <ColorModeProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ColorModeProvider>
  );
}

export default App;
