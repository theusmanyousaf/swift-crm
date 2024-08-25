"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { date: "1 Jul", Last: 3008, Current: 3741 },
    { date: "2 Jul", Last: 5691, Current: 6592 },
    { date: "3 Jul", Last: 8159, Current: 9678 },
    { date: "4 Jul", Last: 11225, Current: 13467 },
    { date: "5 Jul", Last: 14678, Current: 16890 },
    { date: "6 Jul", Last: 17569, Current: 20258 },
    { date: "7 Jul", Last: 20080, Current: 23845 },
]

let xAxisTicks = chartData.map(value => value.date).slice(0, 7)

const chartConfig = {
    last: {
        label: "Last Week",
        color: "#41A5FF",
    },
    current: {
        label: "Current Week",
        color: "#9A55FF",
    },
} satisfies ChartConfig
export default function OverallSales() {
    return (
        <div className='flex flex-col xl:gap-3 gap-[10px] bg-white border rounded-lg xl:pt-6 xl:pb-12 xl:px-4 px-[13.28px] py-[19.92px] w-full'>
            <h1 className='font-semibold text-[13px]'>Overall Sales</h1>
            <div className='flex md:flex-row flex-col gap-2 justify-between'>
                <div className='flex gap-2 items-center'>
                    <h1 className='font-bold font-albert-sans xl:text-2xl text-xl'>$ 58,986.00</h1>
                    <button className="rounded-full xl:text-xs text-[10px] font-bold text-lime-800 bg-lime-200 px-2 mr-3">+ 5.6%</button>
                </div>
                <div className='flex'>
                    <div className="flex items-center mr-4">
                        <div className="rounded-full w-2.5 h-2.5 bg-purple-500 mr-2" />
                        <span className='text-gray-500 text-xs font-semibold'>Current Week</span>
                    </div>
                    <div className="flex items-center">
                        <div className=" rounded-full w-2.5 h-2.5 bg-sky-500 mr-2" />
                        <span className='text-gray-500 text-xs font-semibold'>Last week</span>
                    </div>
                </div>
            </div>
            <hr />
            <OverallSalesGraph />

        </div>
    )
}

function OverallSalesGraph() {
    return (
        <ChartContainer config={chartConfig} className='lg:h-[228px] h-[120px] -ml-5 overflow-hidden'>
            <LineChart data={chartData}>
                <CartesianGrid />
                <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    ticks={xAxisTicks}
                    allowDataOverflow={true}
                />
                <YAxis
                    tickFormatter={(value) => value !== 0 ? value / 1000 + "K" : value}
                    ticks={[0, 5000, 10000, 15000, 20000]}
                    domain={[0, 20000]}
                    interval={0}
                    allowDataOverflow={false}
                    axisLine={false}
                    tickLine={false}
                />
                <ChartTooltip
                    content={<ChartTooltipContent
                        hideIndicator={true}
                        nameKey=""
                        className="w-[150px]"
                    />}
                />
                <Line
                    dataKey="Current"
                    type="linear"
                    stroke={chartConfig.last.color}
                    strokeWidth={4}
                    dot={{
                        fill: chartConfig.last.color,
                        r: 3
                    }}
                />
                <Line
                    dataKey="Last"
                    type="linear"
                    stroke={chartConfig.current.color}
                    strokeWidth={4}
                    dot={{
                        fill: chartConfig.current.color,
                        r: 3
                    }}
                />
            </LineChart>
        </ChartContainer>
    )
}
