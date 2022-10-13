import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Player from "./components/Player";
import useCurrentPath from "./hooks/useCurrentPath";

function App() {
  const { currentPath } = useCurrentPath();

  return (
    <div className="flex flex-col h-screen">
      <Outlet />
      <Player />
      {!(currentPath === "playing") && <Navigation />}
    </div>
  );
}

export default App;
