"use client"
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { sources } from "next/dist/compiled/webpack/webpack"

// const chartData = [
//     { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//     { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//     { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
//     { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//     { browser: "other", visitors: 190, fill: "var(--color-other)" },
// ]
// const chartConfig = {
//     visitors: {
//         label: "Visitors",
//     },
//     chrome: {
//         label: "Chrome",
//         color: "hsl(var(--chart-1))",
//     },
//     safari: {
//         label: "Safari",
//         color: "hsl(var(--chart-2))",
//     },
//     firefox: {
//         label: "Firefox",
//         color: "hsl(var(--chart-3))",
//     },
//     edge: {
//         label: "Edge",
//         color: "hsl(var(--chart-4))",
//     },
//     other: {
//         label: "Other",
//         color: "hsl(var(--chart-5))",
//     },
// } satisfies ChartConfig

const chartData = [
    { sources: "Social Media", percentage: 49, fill: "var(--color-socialMedia)" },
    { sources: "Direct Search", percentage: 35, fill: "var(--color-directSearch)" },
    { sources: "others", percentage: 16, fill: "var(--color-others)" },
]
const chartConfig = {
    sources: {
        label: "sources",
    },
    socialMedia: {
        label: "Social Media",
        color: "#41A5FF",
    },
    directSearch: {
        label: "Direct Search",
        color: "#62912C",
    },
    others: {
        label: "others",
        color: "#ED4D5C",
    }
} satisfies ChartConfig

export default function SourcesOfPurchase() {
    return (
        <div className='flex flex-col gap-3 bg-white border rounded-lg pt-6 pb-3 px-4 w-full'>
            <h1 className='font-semibold'>Sources Of Purchase</h1>
            <hr />
            {/* <Image src={Graph} alt='graph' /> */}
            <SourcesOfPurchaseGraph />
            <div className='flex flex-col gap-3'>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="rounded-full w-2.5 h-2.5 bg-sky-400 mr-2" />
                        <span className='text-gray-300 text-xs font-semibold'>Social Media</span>
                    </div>
                    <h1 className="font-bold text-sm">49%</h1>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className=" rounded-full w-2.5 h-2.5 bg-lime-700 mr-2" />
                        <span className='text-gray-300 text-xs font-semibold'>Direct Search</span>
                    </div>
                    <h1 className="font-bold text-sm">35%</h1>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className=" rounded-full w-2.5 h-2.5 bg-red-600 mr-2" />
                        <span className='text-gray-300 text-xs font-semibold'>Others</span>
                    </div>
                    <h1 className="font-bold text-sm">16%</h1>
                </div>


            </div>
        </div>
    )
}

function SourcesOfPurchaseGraph() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.percentage, 0)
    }, [])
    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] w-full h-full"
        >
            <PieChart>
                <ChartTooltip
                    content={<ChartTooltipContent className="w-36" hideLabel/>}
                />
                <Pie
                    data={chartData}
                    dataKey="percentage"
                    nameKey="sources"
                    innerRadius={60}
                    strokeWidth={5}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground text-3xl font-bold"
                                        >
                                            {totalVisitors.toLocaleString()+"%"}
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </Pie>
            </PieChart>
        </ChartContainer>
    )
}