import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import App from "./App";
import Login from "./components/pages/login/Login";
import Chat from "./components/pages/chat/Chat";

// Defining Route Guards
function authGuard({
  request: { url },
}: {
  request: { url: string };
}): Response | boolean {
  const forLogin: boolean = url.split("/").pop() === "login";
  const isLoggedIn = false;

  if (isLoggedIn) {
    if (!forLogin) return true;

    return redirect("/chat");
  }
  if (forLogin) return true;
  return redirect("/login");
}

// Defining Routes
const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
        loader: authGuard,
      },
      {
        path: "/chat",
        element: <Chat />,
        loader: authGuard,
      },
      {
        path: "",
        element: <Navigate to={"/chat"} replace />,
      },
    ],
  },
];

// Rendering
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
