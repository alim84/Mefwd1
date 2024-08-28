import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Foriegn from "./compunent/Foriegn";
import Leave from "./Leave";
import Me from "./Me";
import Foriegndoctor from "./compunent/ForiegnDoctor";
import * as ReactDOM from "react-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Foriegn />,
    children: [
      {
        path: "doctor",
        element: <Foriegndoctor />,
      },
      {
        path: "leave",
        element: <Leave />,
      },
      {
        path: "me",
        element: <Me />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default Router;
