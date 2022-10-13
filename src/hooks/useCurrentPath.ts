import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname.split("/").pop() ?? "");
  }, [location]);

  return { currentPath };
};

export default useCurrentPath;
