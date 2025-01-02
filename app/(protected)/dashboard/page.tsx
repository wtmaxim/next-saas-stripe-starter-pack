import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/components/dashboard/header";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const metadata = constructMetadata({
  title: "Dashboard – SaaS Starter",
  description: "Create and manage content.",
});

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <>
      <DashboardHeader
        heading="My Dashboard"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Current Page" },
        ]}
      />

      <div className="flex h-full gap-5 p-4">
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No content created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any content yet. Start creating content.
          </EmptyPlaceholder.Description>
          <Button>Add Content</Button>
        </EmptyPlaceholder>
      </div>
    </>
  );
}
