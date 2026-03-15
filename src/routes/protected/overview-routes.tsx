import { type RouteObject } from "react-router";
import { routesPath } from "../routesPath";
import Overview from "@/pages/protected/overview";

export const overviewRoutes = [
  { path: routesPath.PROTECTED.OVERVIEW.INDEX, Component: Overview },
] as RouteObject[];
