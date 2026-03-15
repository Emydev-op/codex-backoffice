import { type RouteObject } from "react-router";
import { routesPath } from "../routesPath";
import TeamManagement from "@/pages/protected/team-mgt";
import CreateAdmin from "@/pages/protected/team-mgt/create-admin";
import EditAdmin from "@/pages/protected/team-mgt/edit-admin";

export const teamMgtRoutes = [
  { path: routesPath.PROTECTED.TEAM_MGT.INDEX, Component: TeamManagement },
  { path: routesPath.PROTECTED.TEAM_MGT.CREATE, Component: CreateAdmin },
  { path: routesPath.PROTECTED.TEAM_MGT.EDIT_PATH, Component: EditAdmin },
] as RouteObject[];
