import { useRoutes } from "react-router-dom";
import { Album } from "../pages/home/Album";

import { Home } from "../pages/home/Home";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/api/digimon/name/:name", element: <Album /> },
  
]);
};
