import StaticNav from "./components/HeaderAndFooter/StaticNav.jsx";
import HomePage from "./pages/Home-Page.jsx";
import CategoriesPage from "./pages/Categories-Page.jsx";

const routes = [
  {
    path: "",
    element: <StaticNav />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      // {
      //   path: "/items",
      //   element: <ItemsPage />,
      // },
    ],
  },
];

export default routes;
