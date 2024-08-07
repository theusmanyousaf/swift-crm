"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { country: "United States", sales: 3250 },
    { country: "France", sales: 1800 },
    { country: "Japan", sales: 2140 },
    { country: "Canada", sales: 730 },
    { country: "Brazil", sales: 400 }
]
const chartConfig = {
    sales: {
        label: "Sales",
        color: "#41A5FF",
    },
} satisfies ChartConfig

export default function SalesPerCountry() {
    return (
        <div className='flex flex-col gap-3 bg-white border rounded-lg py-6 px-4 w-full'>
            <h1 className='font-semibold'>Sales Per Country <span className='font-semibold text-gray-300'>(9,234 Sales)</span></h1>
            <hr />
            {/* <Image src={Graph} alt='graph' /> */}
            <SalesPerCountryGraph />
        </div>
    )
}

function SalesPerCountryGraph() {
    return (
        <ChartContainer config={chartConfig} className="h-[228px]">
            <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
            >
                <CartesianGrid horizontal={false} />
                <XAxis
                    type="number"
                    dataKey="sales"
                    ticks={[500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500]}
                    domain={[0, 4500]}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    dataKey="country"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="sales" fill="var(--color-sales)" radius={1} barSize={20} className="opacity-50 hover:opacity-100" />
            </BarChart>
        </ChartContainer>
    )
}
