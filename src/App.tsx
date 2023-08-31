import { Outlet } from "react-router-dom";
import "./App.scss";
import { ScreenWrapper } from "./components/wrappers/layout-wrappers";
export default function App() {
  return (
    <ScreenWrapper>
      <Outlet />
    </ScreenWrapper>
  );
}
