import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './Root.jsx'
import './index.scss'
import Log, { logAction } from './pages/log/log.jsx'
import ProtectedRoute from "./ProtectedRoute.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sign, { signAction } from './pages/sign/sign.jsx'
import Home from './pages/home/home.jsx'
import Categorie from './pages/categories/categories.jsx'
import Meal from './pages/meal/meal.jsx'
import Courses from './pages/courses/courses.jsx'
import About from './pages/about/about.jsx'
import Contact from './pages/contact/contact.jsx'
import Breakfast from './pages/meal/breakfast.jsx'
import Dinner from './pages/meal/dinner.jsx'
import Lunch from './pages/meal/lunch.jsx'
import Snack from './pages/meal/snack.jsx'
import Admin, { adminLoader } from './pages/admin/Admin.jsx'
import AdminCard from './components/adminCard.jsx'
import Edit from './pages/admin/Edit.jsx'
import ErrorElement from './ErrorElement.jsx'
import CreateCourse from './pages/courses/createCourse.jsx'
import Profil from './pages/profil/profil.jsx'
import PersoInfo, { infoAction } from './pages/profil/personalInfo.jsx'
import CulinarPref from './pages/profil/culinaryPref.jsx'
import Recipe from './pages/profil/recipe.jsx'


  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "*",
    element: <ErrorElement/>
  },
  {
    path: "/log",
    element:<Log/>,
    action: logAction,
  },
  {
    path:"/signup",
    element:<Sign/>,
    action: signAction,
  },
  {
    path:"",
    element: <ProtectedRoute/>,
    children:[
      {
      path:"courses",
      element:<Courses/>
    },
    {
      path:"editCourse",
      element:<CreateCourse/>
    },
    {
      path:"root",
      element:<Root/>,
    },
    {
      path:"categorie",
      element:<Categorie/>,
    },
    {
      path:"meal",
      element:<Meal/>,
    },
    {
      path:"about",
      element:<About/>,
    },
    {
      path:"contact",
      element:<Contact/>,
    },
    {
      path:"breakfast",
      element:<Breakfast/>
    },
    {
    path:"dinner",
    element:<Dinner/>  
    },
    {
    path:"snack",
    element:<Snack/>  
    },
    {
    path:"lunch",
    element:<Lunch/>  
    },
    {
      path:"profil",
      element:<Profil/>,
      children:[{
        path:"personalInfo",
        element:<PersoInfo/>,
        action:infoAction,
      },
      {
        path:"culinaryPref",
        element:<CulinarPref/>
      },
      {
        path:"recipe",
        element:<Recipe/>
      },]
    },
    
  ]
  },
  {
    path:"/admin",
    element:<Admin/>,
    loader:adminLoader,
  },
  {
    path:"/edit",
    element:<Edit/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
