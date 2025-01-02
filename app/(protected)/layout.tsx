import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Dashboard({ children }: ProtectedLayoutProps) {
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  return (
    <SidebarProvider>
    <AppSidebar user={user} />
    <SidebarInset>
      {children}
    </SidebarInset>
  </SidebarProvider>

  );
}
