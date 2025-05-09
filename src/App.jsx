import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/home/Home";
import Hobbies from "./components/hobbies/Hobbies";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutMe/AboutMe";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about-me/",
    element: <AboutMe />,
  },
  {
    path: "hobbies/",
    element: <Hobbies />,
  },
  {
    path: "projects/",
    element: <Projects />,

    children: [
      {
        path: "projects/finance",
        element: <Projects />,
      },
    ],
  },
];

const router = createBrowserRouter(
  routes,
  { basename: "/portfolio-frontend" },
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      />
    </>
  );
}

export default App;
