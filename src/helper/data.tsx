import {
 ArchiveRestore,
 BellRing,
 ContactRoundIcon,
 LayoutDashboardIcon,
 ScrollText,
 SettingsIcon,
 ShoppingBasketIcon,
 UserRoundCog,
 Users2Icon
} from "lucide-react";

export const mainMenu = [
 {
  title: "mainMenu.home",
  href: "/home"
 },
 {
  title: "mainMenu.shop",
  href: "/shop"
 },
 {
  title: "mainMenu.contact",
  href: "/contact"
 },
 {
  title: "mainMenu.about",
  href: "/about"
 },
 {
  title: "mainMenu.offers",
  href: "/offers"
 },
 {
  title: "mainMenu.recently",
  href: "/recently"
 }
];
export const dashboardSidebar = [
 {
  title: "dashboard_side_bar.side_bar.Dashboard",
  href: "/dashboard",
  active: true,
  icon: <LayoutDashboardIcon className=" size-7 " />
 },
 {
  title: "dashboard_side_bar.side_bar.Employee",
  href: "/dashboard/employee",
  icon: <ContactRoundIcon className=" size-7 " />
 },
 {
  title: "dashboard_side_bar.side_bar.Admins",
  href: "/dashboard/admins",
  icon: <UserRoundCog className=" size-7 " />
 },
 {
  title: "dashboard_side_bar.side_bar.Products",
  href: "/dashboard/produicts",
  icon: <ShoppingBasketIcon className=" size-7" />
 },
 {
  title: "dashboard_side_bar.side_bar.Orders",
  href: "/dashboard/orders",
  icon: <ScrollText className=" size-7 " />
 },
 {
  title: "dashboard_side_bar.side_bar.Clients",
  href: "/dashboard/clients",
  icon: <Users2Icon className=" size-7 " />
 },
 {
  title: "dashboard_side_bar.side_bar.Stock",
  href: "/dashboard/stock",
  icon: <ArchiveRestore className=" size-7 " />
 },
 {
    title: "dashboard_side_bar.side_bar.Notifications",
    href: "/dashboard/notifications",
    icon: <BellRing className=" size-7 " />
   },
  
 {
  title: "dashboard_side_bar.side_bar.Settings",
  href: "/dashboard/settings",
  icon: <SettingsIcon className=" size-7 " />
 },
];
