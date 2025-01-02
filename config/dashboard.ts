import { UserRole } from "@prisma/client";
import { BookOpen, DollarSign, Home, Laptop, LayoutDashboard, LineChart, MessageCircle, Notebook, Package, Settings } from "lucide-react";

export const sidebarLinks = {
  menu: [
    {
      title: "Admin Panel",
      url: "/admin",
      icon: Laptop,
      isActive: true,
      authorizeOnly: UserRole.ADMIN,
    },
    { url: "/dashboard", icon: LayoutDashboard, title: "Dashboard" },
    {
      url: "/dashboard/billing",
      icon: DollarSign,
      title: "Billing",
      authorizeOnly: UserRole.USER,
    },
    {
      url: "/dashboard/charts",
      icon: LineChart,
      title: "Charts"
    },
    {
      url: "/admin/orders",
      icon: Package,
      title: "Orders",
      badge: 2,
      authorizeOnly: UserRole.ADMIN,
    }
  ],
  options: [
    { url: "/dashboard/settings", icon: Settings, title: "Settings" },
    { url: "/", icon: Home, title: "Homepage" },
    { url: "/docs", icon:  BookOpen, title: "Documentation" },
    {
      url: "#",
      icon: MessageCircle,
      title: "Support",
      authorizeOnly: UserRole.USER,
      disabled: true,
    },
  ]
}