import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import Register from "./pages/Register";
 import LoginForm from "./pages/LoginForm";
import { AppLayout } from "./components/layout/AppLaout";
import ShopkeeperDashboard from "./pages/ShopkeeperDashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,

        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path: "/services",
          element: <Services />,
        },
        
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/shopkeeper-dashboard/*", //Add for trailing
          element: <ShopkeeperDashboard />,
        },
      ],
    },
  ]);
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path = "/" element = {<Home/>}/>
  //       <Route path = "/about" element = {<About/>}/>
  //       <Route path = "/" contact = {<Contact/>}/>
  //       <Route path = "/services" element = {<Services/>}/>
  //     </Route>
  //   )
  // )
  return <RouterProvider router={router} />;
}

export default App;