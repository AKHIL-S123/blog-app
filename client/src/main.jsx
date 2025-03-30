import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blogs from './pages/Blogs.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import SingleBlog from './pages/SingleBlog.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/ >
      },
      {
        path: "/blogs",
        element: <Blogs/ >
      },
      {
        path: "/about",
        element: <About/ >
      },
      {
        path: "/contact",
        element: <Contact/ >
      },
      {
        path: "/services",
        element: <Services/ >
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog/ >,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ]

  }

]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
