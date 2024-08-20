"use client"
import useScreenWidth from "@/hooks/useScreenWidth"
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
        <div className='flex flex-col md:gap-3 gap-[10px] bg-white border rounded-lg lg:py-6 pt-[19.92px] lg:px-4 w-full'>
            <h1 className='font-semibold lg:px-0 px-[13px] lg:text-base text-[13.28px]'>Sales Per Country <span className='font-semibold text-gray-300'>(9,234 Sales)</span></h1>
            <hr className="lg:mx-0 mx-[13px]" />
            <SalesPerCountryGraph />
        </div>
    )
}


function SalesPerCountryGraph() {

    const isDesktop = useScreenWidth(767)

    return (
        <ChartContainer config={chartConfig} className="md:h-[228px] h-36 md:-ml-0 -ml-5 pr-[13px] lg:pr-0 w-full">
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
                    interval={0}
                    padding={isDesktop?{right:50}:{right:20}}
                    className="sm:text-base text-[6.8px]"
                />
                <YAxis
                    dataKey="country"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    interval={0}
                    className="sm:text-base text-[6.8px]"
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="sales" fill="var(--color-sales)" radius={1} barSize={isDesktop ? 20 : 10} className="opacity-50 hover:opacity-100 h-[10px] md:h-auto" />
            </BarChart>
        </ChartContainer>
    )
}
