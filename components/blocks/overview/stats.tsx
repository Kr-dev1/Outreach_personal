"use client"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useTRPC } from "@/trpc/client/client"
import { useSuspenseQuery } from "@tanstack/react-query"
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

export default function StatCards() {
    const trpc = useTRPC()
    const { data } = useSuspenseQuery(trpc.overview.getOverview.queryOptions())

    return (
        <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Total Businesses</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {data.totalCount}
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>No Website</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {data.noWebsite}
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Phone Numbers</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {data.phone}
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Last Sync</CardDescription>
                    <CardTitle
                        className="text-2xl font-semibold tabular-nums @[250px]/card:text-2xl"
                        suppressHydrationWarning
                    >
                        {data.lastSynced
                            ? new Date(data.lastSynced.createdAt).toLocaleString([], {
                                dateStyle: "medium",
                                timeStyle: "short",
                            })
                            : "Never"}
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}
