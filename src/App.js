import React, {lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestarauntMenu from "./components/RestarauntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense } from "react";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const AppLayout= ()=>{

  const [userName,setUserName]=useState();
  useEffect(()=>{
    const data={
      name:"Jayshri dhus",
    };
    setUserName(data.name);
  }, []);

    return (
      <UserContext.Provider value={{LoggedInUser: userName }}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
    );
};

const Grocery = lazy( ()=> import("./components/Grocery"));

const appRouter=createBrowserRouter([
{
    path:"/",
    element:<AppLayout/>,
    children:[
           {
            path:"/",
            element:<Body />
           },
           {
             path:"/contact",
             element:<Contact />
           },
           {
             path:"/about",
             element:<About />
           },
            {
             path:"/grocery",
             element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
           },
           {
             path:"/restaraunt/:resId",
             element:<RestarauntMenu />
           }
    ],
    errorElement:<Error/>
},
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);