import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./hooks/http";

import Pga from "./components/tours/Pga";
//import logo from "./assets/logo.svg";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/portfolio-frontend",
    element: <Navigate to='/golf' />,
  },
  {
    path: "/golf",
    element: <Pga />,

    // children: [
    //   {
    //     path: "/events/new",
    //     element: <NewEvent />,
    //   },
    // ],
  },
]);

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    // </QueryClientProvider>
  );
}

export default App;
