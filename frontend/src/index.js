import React from 'react';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root, { catLoader } from './routes/Root.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './routes/Categories.js';
import Category, { laoderCat } from './routes/Category.js';
import Recipe, { recLoader } from './routes/Recipe.js';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Categories />,
                loader: catLoader
            },
     
            {
                path: "categories/:categoryId",
                element: <Category />,
                loader: laoderCat
            },
            {
                path: "recipes/:recipeId",
                element: <Recipe />,
                loader: recLoader
            }
            
        ]
    }, 

])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );