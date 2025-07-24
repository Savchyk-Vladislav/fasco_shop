import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import ClothPage from "./pages/ClothPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, BASKET_ROUTE, CLOTH_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, HOME_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: CLOTH_ROUTE + "/:id",
    Component: ClothPage,
  },
];
