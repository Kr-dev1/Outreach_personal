import StatCards from "@/components/blocks/overview/stats";
import { DataTable } from "@/components/blocks/overview/data-table";
import { requireAuth } from "@/lib/auth/auth-lib";
import { HydrateClient, prefetch, trpc } from "@/trpc/server/server";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

const Page = async () => {
    await requireAuth()
    prefetch(trpc.overview.getOverview.queryOptions())
    prefetch(trpc.overview.getRecentData.queryOptions())
    return (
        <HydrateClient>
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "calc(var(--spacing) * 72)",
                        "--header-height": "calc(var(--spacing) * 12)",
                    } as React.CSSProperties
                }
            >
                <AppSidebar variant="inset" />
                <SidebarInset>
                    <SiteHeader />
                    <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                                <StatCards />
                                <DataTable />
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </HydrateClient>
    )
};

export default Page;