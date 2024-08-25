"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { date: "", Sales: 0, Revenue: 0, Views: 0 },
    { date: "1 Jul 2024", Sales: 2037, Revenue: 3008, Views: 3741 },
    { date: "2 Jul 2024", Sales: 4088, Revenue: 5691, Views: 6592 },
    { date: "3 Jul 2024", Sales: 6145, Revenue: 8159, Views: 9679 },
    { date: "4 Jul 2024", Sales: 8554, Revenue: 11225, Views: 13467 },
    { date: "5 Jul 2024", Sales: 11247, Revenue: 14678, Views: 16890 },
    { date: "6 Jul 2024", Sales: 14053, Revenue: 17569, Views: 20258 },
    { date: "7 Jul 2024", Sales: 16590, Revenue: 20080, Views: 22845 },
]

let xAxisTicks = chartData.map(value => value.date).slice(1, 8)

const chartConfig = {
    sales: {
        label: "Total Sales",
        color: "#62912C",
    },
    revenue: {
        label: "Total Revenue",
        color: "#41A5FF",
    },
    views: {
        label: "Total Views",
        color: "#9A55FF",
    },
} satisfies ChartConfig

export default function SalesStatistics() {
    return (
        <div className="bg-white xl:py-6 py-5 xl:pl-4 xl:pr-[23px] pl-[13px] rounded-lg border mx-[10.28%] lg:mx-0">
            <h1 className="font-semibold mb-3">Sales Statistics</h1>
            <hr className="border-gray-300 mr-4 mb-3" />
            <div className='flex justify-evenly mr-2 mb-3'>
                <div className='flex flex-1'>
                    <div className='w-[25px] h-[25px] flex items-center justify-center'><div className='bg-sky-400 rounded-full w-4 h-4' /></div>
                    <div className='flex-col'><h2 className='text-gray-600 font-semibold xl:text-[15px] text-xs'>Total Revenue</h2><h1 className='xl:text-2xl text-xl font-bold'>$ 27,733.00 <span className='text-gray-300 font-semibold xl:text-[15px] text-xs'>Orders</span></h1></div>
                </div>
                <hr className='w-0 h-full border border-gray-400 mr-2' />
                <div className='flex'>
                    <div className='w-[25px] h-[25px] flex items-center justify-center'><div className='bg-lime-600 rounded-full w-4 h-4' /></div>
                    <div className='flex-col'><h2 className='text-gray-600 font-semibold xl:text-[15px] text-xs'>Total Sales</h2><h1 className='xl:text-2xl text-xl font-bold'>9,234 <span className='text-gray-300 font-semibold xl:text-[15px] text-xs'>Products</span></h1></div>
                </div>
                <hr className='w-0 h-full border border-gray-400 mx-2' />
                <div className='flex'>
                    <div className='w-[25px] h-[25px] flex items-center justify-center'><div className='bg-purple-500 rounded-full w-4 h-4' /></div>
                    <div className='flex-col'><h2 className='text-gray-600 font-semibold xl:text-[15px] text-xs'>Total Views</h2><h1 className='xl:text-2xl text-xl font-bold'>15,788 <span className='text-gray-300 font-semibold xl:text-[15px] text-xs'>Views</span></h1></div>
                </div>
            </div>
            <SalesStatisticsGraph />
        </div>
    )
}

function SalesStatisticsGraph() {
    return (
        <ChartContainer config={chartConfig} className='w-full xl:h-[288px] h-[189px] overflow-hidden -ml-4'>
            <LineChart data={chartData} >
                <CartesianGrid />
                <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short"
                        })
                    }}
                    ticks={xAxisTicks}
                    interval={0}
                />
                <YAxis
                    tickFormatter={(value) => value !== 0 ? value / 1000 + "K" : value}
                    ticks={[0, 5000, 10000, 15000, 20000]}
                    domain={[0, 20000]}
                    interval="preserveStart"
                    allowDataOverflow={false}
                    axisLine={false}
                    tickLine={false}
                />
                <ChartTooltip
                    content={<ChartTooltipContent
                        className="w-[201px] rounded-lg"
                        indicator="dot"
                        labelFormatter={(value) => {
                            return new Date(value).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })
                        }} />}
                />
                <Line
                    dataKey="Views"
                    type="linear"
                    stroke={chartConfig.views.color}
                    strokeWidth={4}
                    dot={{
                        fill: chartConfig.views.color,
                        r: 3
                    }}
                />
                <Line
                    dataKey="Revenue"
                    type="linear"
                    stroke={chartConfig.revenue.color}
                    strokeWidth={4}
                    dot={{
                        fill: chartConfig.revenue.color,
                        r: 3
                    }}
                />
                <Line
                    dataKey="Sales"
                    type="linear"
                    stroke={chartConfig.sales.color}
                    strokeWidth={4}
                    dot={{
                        fill: chartConfig.sales.color,
                        r: 3
                    }}
                />
            </LineChart>
        </ChartContainer>
    )
}