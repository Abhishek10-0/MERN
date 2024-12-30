import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, RouterProvider ,Routes,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import './index.css'
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Layout from "./Layout.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       {
//         path: "about", element: <About />
//       },
//       { path: "contact", element: <Contact/> },
//     ],
//   },
// ]);




// One More way to do This

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="" element={<Home />} />
      <Route path= "user/:userid" element={<User />}/>
      <Route path= "github" element={<Github />}/>
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
