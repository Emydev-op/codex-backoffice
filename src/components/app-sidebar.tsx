"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { svgIcons } from "@/assets/svg";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  LogoutIcon,
  SchoolIcon,
  TeamMgtIcon,
} from "@/assets/navbar-svg";
import { NavMain } from "./nav-main";
import { routesPath } from "@/routes/routesPath";
import { useLocation } from "react-router";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation().pathname;
  const handleLogout = () => {};

  const data = {
    navMain: [
      {
        title: "Home",
        url: routesPath.PROTECTED.OVERVIEW.INDEX,
        icon: HomeIcon,
        isActive: location.startsWith(routesPath.PROTECTED.OVERVIEW.INDEX),
        childActive: false,
        items: [
          //   {
          //     title: "Schedule Payment",
          //     url: "#",
          //     isActive: false,
          //   },
        ],
      },
      {
        title: "School Management",
        url: routesPath.PROTECTED.SCHOOL_MGT.INDEX,
        icon: SchoolIcon,
        isActive: location.startsWith(routesPath.PROTECTED.SCHOOL_MGT.INDEX),
        childActive: false,
      },
      {
        title: "Team Management",
        url: routesPath.PROTECTED.TEAM_MGT.INDEX,
        icon: TeamMgtIcon,
        isActive: location.startsWith(routesPath.PROTECTED.TEAM_MGT.INDEX),
        childActive: false,
      },
    ],
  };
  const { state } = useSidebar();
  return (
    <>
      <Sidebar className="bg-white" collapsible="icon" {...props}>
        <SidebarHeader className="bg-white">
          <SidebarMenu>
            <SidebarMenuItem className="mt-2">
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-transparent cursor-pointer mx-auto h-10"
              >
                <div className={cn("size-fit mx-auto")}>
                  {state === "collapsed" ? svgIcons.logo : svgIcons.codexIcon}
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="bg-white pt-3">
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter className="bg-white ">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                className="h-10 mx-auto mb-10 hover:bg-destructive/5 hover:text-destructive"
                tooltip="Logout"
                onClick={handleLogout}
              >
                <LogoutIcon />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
}
