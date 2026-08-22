"use client"

import * as React from "react"
import {
  columnFilteringFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
  useTable,
  type ColumnFiltersState,
  type ColumnVisibilityState,
  type SortingState,
} from "@tanstack/react-table"
import { useListData } from "react-aria-components"
import { z } from "zod"

import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { GripVerticalIcon, EllipsisVerticalIcon, PlusIcon, ChevronsLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsRightIcon } from "lucide-react"
import { useTRPC } from "@/trpc/client/client"
import { useSuspenseQuery } from "@tanstack/react-query"
import Link from "next/link"

// New in v9: declare the features this table uses — anything you don't
// register is tree-shaken out of the bundle.
const features = tableFeatures({
  columnFilteringFeature,
  columnVisibilityFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
})

const columnHelper = createColumnHelper<
  typeof features,
  z.infer<typeof schema>
>()

export const schema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  placeId: z.string(),
  name: z.string(),
  googleMapsUrl: z.string().nullable(),
  website: z.string().nullable(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  region: z.string().nullable(),
  country: z.string().nullable(),
  postalCode: z.string().nullable(),
  category: z.string().nullable(),
  rating: z.number().nullable(),
  reviewCount: z.number().nullable(),
  rawData: z.any().nullable(),
  firstDiscoveredAt: z.coerce.date(),
  lastDiscoveredAt: z.coerce.date(),
})
const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Name",
    cell: ({ row }) => {
      return <TableCellViewer item={row.original} />
    },
    enableHiding: false,
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: ({ row }) => (
      <div className="w-32">
        {row.original.category ? (
          <Badge variant="outline" className="px-1.5 text-muted-foreground">
            {row.original.category}
          </Badge>
        ) : (
          <span className="text-muted-foreground">—</span>
        )}
      </div>
    ),
  }),
  columnHelper.accessor("phone", {
    header: "Phone",
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        {row.original.phone ?? "—"}
      </span>
    ),
  }),
  columnHelper.accessor("website", {
    header: "Website",
    cell: ({ row }) => {
      const url = row.original.website
      if (!url) return <span className="text-muted-foreground">—</span>
      let display = url
      try {
        display = new URL(url).hostname.replace(/^www\./, "")
      } catch { }
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline dark:text-blue-400"
        >
          {display}
        </a>
      )
    },
  }),
  columnHelper.accessor("rating", {
    header: () => <div className="w-full text-right">Rating</div>,
    cell: ({ row }) => (
      <div className="text-right">
        {row.original.rating != null ? (
          <Badge variant="outline" className="px-1.5 text-muted-foreground">
            ⭐ {row.original.rating.toFixed(1)}
          </Badge>
        ) : (
          <span className="text-muted-foreground">—</span>
        )}
      </div>
    ),
  }),
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          className="flex size-8 text-muted-foreground aria-expanded:bg-muted"
          size="icon"
        >
          <EllipsisVerticalIcon
          />
          <span className="sr-only">Open menu</span>
        </Button>
        <DropdownMenu placement="bottom end" className="w-32">
          <DropdownMenuItem>
            <Link target="_blank" href={row.original.googleMapsUrl!}>Show Gmaps</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenu>
      </DropdownMenuTrigger>
    ),
  }),
])

export function DataTable() {
  const trpc = useTRPC()
  const { data: initialData } = useSuspenseQuery(trpc.overview.getRecentData.queryOptions())

  const parsedData = React.useMemo(
    () => z.array(schema).parse(initialData),
    [initialData]
  )
  const list = useListData({
    initialItems: parsedData,
    getKey: (item) => String(item.id),
  })
  const data = list.items
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const table = useTable({
    features,
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })

  return (
    <>
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          View
        </Label>
      </div>
      <div className="overflow-hidden rounded-lg border mx-6">
        <Table
          aria-label="Tasks"
          selectionMode="multiple"
          onSelectionChange={(selection) => {
            if (selection === "all") {
              table.toggleAllRowsSelected()
            } else {
              table.setRowSelection(
                Object.fromEntries([...selection].map((key) => [key, true]))
              )
            }
          }}
          sortDescriptor={
            sorting.length
              ? {
                column: sorting[0].id,
                direction: sorting[0].desc ? "descending" : "ascending",
              }
              : undefined
          }
          onSortChange={(sortDescriptor) => {
            table.setSorting([
              {
                id: "" + sortDescriptor.column,
                desc: sortDescriptor.direction === "descending",
              },
            ])
          }}
        >
          <TableHeader className="sticky top-0 z-10 bg-muted">
            {table.getFlatHeaders().map((header) => (
              <TableHead
                key={header.id}
                id={header.id}
                isRowHeader={header.index === 1}
                allowsSorting={header.column.getCanSort()}
              >
                {header.isPlaceholder ? null : (
                  <table.FlexRender header={header} />
                )}
              </TableHead>
            ))}
          </TableHeader>
          <TableBody
            className="data-empty:h-24 data-empty:text-center **:data-[slot=table-cell]:first:w-8"
            renderEmptyState={() => "No results."}
          >
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                id={row.id}
                value={row.original}
                className="relative z-0 data-[dragging=false]:z-10 data-[dragging=true]:opacity-80"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}


function TableCellViewer({ item }: { item: z.infer<typeof schema> }) {
  const isMobile = useIsMobile()
  return (
    <Drawer swipeDirection={isMobile ? "down" : "right"}>
      <DrawerTrigger
        render={
          <Button
            variant="link"
            className="w-fit px-0 text-left text-foreground"
          />
        }
      >
        {item.name}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-1">
          <DrawerTitle>{item.name}</DrawerTitle>
          <DrawerDescription>
            {[item.category, item.city, item.country].filter(Boolean).join(" · ") || "Company details"}
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue={item.name} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="category">Category</Label>
                <Input id="category" defaultValue={item.category ?? ""} />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue={item.phone ?? ""} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="city">City</Label>
                <Input id="city" defaultValue={item.city ?? ""} />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="country">Country</Label>
                <Input id="country" defaultValue={item.country ?? ""} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="region">Region</Label>
                <Input id="region" defaultValue={item.region ?? ""} />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" defaultValue={item.postalCode ?? ""} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="website">Website</Label>
              <Input id="website" defaultValue={item.website ?? ""} />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue={item.address ?? ""} />
            </div>
            {item.googleMapsUrl && (
              <div className="flex flex-col gap-3">
                <Label>Google Maps</Label>
                <a
                  href={item.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline dark:text-blue-400"
                >
                  View on Google Maps
                </a>
              </div>
            )}
          </form>
        </div>
        <DrawerFooter>
          <Button>Save</Button>
          <DrawerClose render={<Button variant="outline" />}>Done</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
