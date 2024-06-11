import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Home from "./home/home";
import Profile from "./profile/profile";
import Registration from "./auth/registration";
import Login from "./auth/login";
import JobForm from "./jobs/JobForm";
import RequireAuth from "./RequireAuth";
import Job from "./jobs/Job";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        path: "/jobs",
        element: null,
        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <JobForm />
              </RequireAuth>
            ),
          },
          {
            path: "/jobs/:jobId",
            element: <Job />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
